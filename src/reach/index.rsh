'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Creator = Participant('Creator', {
    ready: Fun([], Null),
    subscriptionPrice: UInt,
    viewNewPremiumSubscriber: Fun([Address, Bool], Null),
    checkBalance: Fun([], Null)
  });

  const Subscriber = ParticipantClass('Subscriber', {
    viewPost: Fun([Bytes(1000)], Null)
  });

  const SubscriberActions = API('SubscriberActions', {
    subscribe: Fun([], Bool),
    unsubscribe: Fun([], Bool)
  });

  const CreatorActions = API('CreatorActions', {
    withdraw: Fun([], Bool),
    post: Fun([Object({post: Bytes(1000), premium: Bool})], Bool)
  });

  init();

  Creator.only(() => {
    interact.ready();
    const subscriptionPrice = declassify(interact.subscriptionPrice);
  });
  Creator.publish(subscriptionPrice);
  const PREMIUM = new Set();

  const [ counter ] =
    parallelReduce([ 0 ])
      .invariant(balance() == balance())
      .while(true)
      .api_(CreatorActions.post, ({post, premium}) => {
        check( this == Creator);

        return [0, (resolve) => {
          resolve(true);

          Subscriber.only(() => {
            const subscriberAddress = this;
            if(premium){
              if(PREMIUM.member(subscriberAddress)){
                interact.viewPost(post);
              }
            }
            else {
              interact.viewPost(post);
            };
          });

          return [ counter ];
        }];
      })
      .api_(SubscriberActions.subscribe, () => {
        check((this != Creator)&&(!PREMIUM.member(this)));

        return [ subscriptionPrice * 1000000, (resolve) => {
          resolve(true);
          PREMIUM.insert(this);
          Creator.interact.viewNewPremiumSubscriber(this, true);
          return [ counter ];
        }];
      })
      .api_(SubscriberActions.unsubscribe, () => {
        check((this != Creator)&&(PREMIUM.member(this)));

        return [ 0, (resolve) => {
          resolve(true);
          PREMIUM.remove(this);
          Creator.interact.viewNewPremiumSubscriber(this, false);
          return [ counter ];
        }]
      })
      .api_(CreatorActions.withdraw, () => {
        check( this == Creator);

        return [0, (resolve) => {
          resolve(true);
          transfer(balance()).to(Creator);
          Creator.interact.checkBalance();
          return [ counter ];
        }];
      });

  transfer(balance()).to(Creator);
  commit();

  exit();

})