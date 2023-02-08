import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const acc = await stdlib.newTestAccount(startingBalance);

//Set up functions for checking balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log('Your starting balance is: ' + before)
console.log(`Your address is ${acc.getAddress()}`)

const Creator = {
  ready: () => {
    console.log('Ready')
  },

  post : async () => {
    const post = await ask(
      `Type in a blog post.. (1000 characters max including space)`
    );
    const isPremium =  await ask('Is this a premium post?', yesno)
    return { post, premium: isPremium };
  },

  viewNewPremiumSubscriber: (address, subscribed) => {
    console.log(`${address} just ${subscribed ? 'subscribed' : 'unsubscribed'}`)
  },

  checkBalance: async () => {
    console.log(`Your current balance is ${await getBalance()}`)
  }
}

const Subscriber = {
  viewPost: (post) => {
    console.log('----------NEW POST----------');
    console.log(post)
    console.log('----------------------------');
  }
}



const createStream = async () => {
  const isBlogOwner = await ask(
    `Do you want to create a blog?`,
    yesno
  );
  const who = isBlogOwner ? 'Owner' : 'Subscriber';

  console.log(`Starting as ${who}`);

  let ctc = null;
  if (isBlogOwner) {
    const subscriptionPrice = await ask('How much is your subscription price?', parseFloat)
    ctc = acc.contract(backend);
    backend.Creator(ctc, {
      ...Creator,
      subscriptionPrice
    })
    console.log('Deploying Blog...');
    const info = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log('Contract info..')
    console.log(info);

    while(true){
      const makePost = await ask('Do you want to create post?', yesno)
      if(makePost){
        const post = await ask(
          `Type in a blog post.. (1000 characters max including space)`
        );
        const isPremium =  await ask('Is this a premium post?', yesno)
        await ctc.apis.CreatorActions.post({
          post,
          premium: isPremium
        });
      }
      else {
        const withdraw = await ask('Do you want to withdraw your funds?', yesno)
        if(!withdraw) continue
        await ctc.apis.CreatorActions.withdraw()
      }
      
    }
  } else {
    const info = await ask(
      `Please paste the contract information of the blog you want to subscribe to:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    let subscribed = false

    backend.Subscriber(ctc, {
      viewPost: async (post) => {
        console.log('----------NEW POST----------');
        console.log(post)
        console.log('----------------------------');
      }
    });

    console.log("...Successfully Connected...")
    while(true){
      if(!subscribed){
        const subscribe = await ask('Do you want to subscribe for premium', yesno)
        if(subscribe){
          const sub = await ctc.apis.SubscriberActions.subscribe();
          if(sub) {
            console.log('You are now a premium member')
            subscribed = true
          }
        }
      }
      else{
        const unsubscribe = await ask('Do you want to unsubscribe from premium', yesno)
        if(unsubscribe){
          const sub = await ctc.apis.SubscriberActions.unsubscribe();
          if(sub) {
            console.log('You are no longer a premium member')
            subscribed = false
          }
        }
      }
    }
    }
  // }
};

await createStream();