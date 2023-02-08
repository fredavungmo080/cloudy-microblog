// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    post: ctc3,
    premium: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    CreatorActions_post0_40: ctc6,
    CreatorActions_withdraw0_40: ctc7,
    SubscriberActions_subscribe0_40: ctc7,
    SubscriberActions_unsubscribe0_40: ctc7
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v718 = stdlib.protect(ctc2, interact.subscriptionPrice, 'for Creator\'s interact field subscriptionPrice');
  
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:30:19:application',
    fs: ['at ./index.rsh:29:15:application call to [unknown function] (defined at: ./index.rsh:29:19:function exp)'],
    msg: 'ready',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v718],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v722], secs: v724, time: v723, didSend: v27, from: v721 } = txn1;
      
      ;
      const v726 = v723;
      const v729 = stdlib.checkedBigNumberify('./index.rsh:27:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v721,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v722], secs: v724, time: v723, didSend: v27, from: v721 } = txn1;
  ;
  let v726 = v723;
  let v729 = stdlib.checkedBigNumberify('./index.rsh:27:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn2;
    switch (v826[0]) {
      case 'CreatorActions_post0_40': {
        const v829 = v826[1];
        undefined /* setApiDetails */;
        const v837 = stdlib.addressEq(v825, v721);
        stdlib.assert(v837, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:52:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        ;
        const v871 = true;
        await txn2.getOutput('CreatorActions_post', 'v871', ctc4, v871);
        const cv726 = v827;
        const cv729 = v729;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      case 'CreatorActions_withdraw0_40': {
        const v940 = v826[1];
        undefined /* setApiDetails */;
        const v951 = stdlib.addressEq(v825, v721);
        stdlib.assert(v951, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:41:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        ;
        const v1001 = true;
        await txn2.getOutput('CreatorActions_withdraw', 'v1001', ctc4, v1001);
        const v1011 = stdlib.sub(v729, v729);
        ;
        stdlib.protect(ctc0, await interact.checkBalance(), {
          at: './index.rsh:87:40:application',
          fs: ['at ./index.rsh:87:40:application call to [unknown function] (defined at: ./index.rsh:87:40:function exp)', 'at ./index.rsh:87:40:application call to "liftedInteract" (defined at: ./index.rsh:87:40:application)', 'at ./index.rsh:84:30:application call to [unknown function] (defined at: ./index.rsh:84:30:function exp)'],
          msg: 'checkBalance',
          who: 'Creator'
          });
        
        const cv726 = v827;
        const cv729 = v1011;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      case 'SubscriberActions_subscribe0_40': {
        const v1051 = v826[1];
        undefined /* setApiDetails */;
        const v1065 = stdlib.addressEq(v825, v721);
        const v1067 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v825), null);
        let v1068;
        switch (v1067[0]) {
          case 'None': {
            const v1069 = v1067[1];
            v1068 = false;
            
            break;
            }
          case 'Some': {
            const v1070 = v1067[1];
            v1068 = true;
            
            break;
            }
          }
        const v1071 = v1068 ? false : true;
        const v1072 = v1065 ? false : v1071;
        stdlib.assert(v1072, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:45:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1074 = stdlib.mul(v722, stdlib.checkedBigNumberify('./index.rsh:64:38:decimal', stdlib.UInt_max, '1000000'));
        const v1085 = stdlib.add(v729, v1074);
        ;
        let v1129;
        switch (v1067[0]) {
          case 'None': {
            const v1130 = v1067[1];
            v1129 = false;
            
            break;
            }
          case 'Some': {
            const v1131 = v1067[1];
            v1129 = true;
            
            break;
            }
          }
        const v1132 = v1129 ? false : true;
        const v1133 = v1065 ? false : v1132;
        stdlib.assert(v1133, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:57:application call to [unknown function] (defined at: ./index.rsh:64:57:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1135 = true;
        await txn2.getOutput('SubscriberActions_subscribe', 'v1135', ctc4, v1135);
        await stdlib.mapSet(map0, v825, null);
        stdlib.protect(ctc0, await interact.viewNewPremiumSubscriber(v825, true), {
          at: './index.rsh:67:52:application',
          fs: ['at ./index.rsh:67:52:application call to [unknown function] (defined at: ./index.rsh:67:52:function exp)', 'at ./index.rsh:67:52:application call to "liftedInteract" (defined at: ./index.rsh:67:52:application)', 'at ./index.rsh:64:57:application call to [unknown function] (defined at: ./index.rsh:64:57:function exp)'],
          msg: 'viewNewPremiumSubscriber',
          who: 'Creator'
          });
        
        const cv726 = v827;
        const cv729 = v1085;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      case 'SubscriberActions_unsubscribe0_40': {
        const v1162 = v826[1];
        undefined /* setApiDetails */;
        const v1187 = stdlib.addressEq(v825, v721);
        const v1189 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v825), null);
        let v1190;
        switch (v1189[0]) {
          case 'None': {
            const v1191 = v1189[1];
            v1190 = false;
            
            break;
            }
          case 'Some': {
            const v1192 = v1189[1];
            v1190 = true;
            
            break;
            }
          }
        const v1193 = v1187 ? false : v1190;
        stdlib.assert(v1193, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:47:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Creator'
          });
        ;
        let v1259;
        switch (v1189[0]) {
          case 'None': {
            const v1260 = v1189[1];
            v1259 = false;
            
            break;
            }
          case 'Some': {
            const v1261 = v1189[1];
            v1259 = true;
            
            break;
            }
          }
        const v1262 = v1187 ? false : v1259;
        stdlib.assert(v1262, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v1264 = true;
        await txn2.getOutput('SubscriberActions_unsubscribe', 'v1264', ctc4, v1264);
        await stdlib.mapSet(map0, v825, undefined /* Nothing */);
        stdlib.protect(ctc0, await interact.viewNewPremiumSubscriber(v825, false), {
          at: './index.rsh:77:52:application',
          fs: ['at ./index.rsh:77:52:application call to [unknown function] (defined at: ./index.rsh:77:52:function exp)', 'at ./index.rsh:77:52:application call to "liftedInteract" (defined at: ./index.rsh:77:52:application)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
          msg: 'viewNewPremiumSubscriber',
          who: 'Creator'
          });
        
        const cv726 = v827;
        const cv729 = v729;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  };
export async function _CreatorActions_post3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _CreatorActions_post3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _CreatorActions_post3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    post: ctc4,
    premium: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    CreatorActions_post0_40: ctc7,
    CreatorActions_withdraw0_40: ctc8,
    SubscriberActions_subscribe0_40: ctc8,
    SubscriberActions_unsubscribe0_40: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v721, v722, v729] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc3]);
  const v733 = ctc.selfAddress();
  const v735 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:40:52:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to "runCreatorActions_post0_40" (defined at: ./index.rsh:40:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'in',
    who: 'CreatorActions_post'
    });
  const v742 = stdlib.addressEq(v733, v721);
  stdlib.assert(v742, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:52:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to "runCreatorActions_post0_40" (defined at: ./index.rsh:40:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: null,
    who: 'CreatorActions_post'
    });
  const v751 = ['CreatorActions_post0_40', v735];
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v722, v729, v751],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
      
      switch (v826[0]) {
        case 'CreatorActions_post0_40': {
          const v829 = v826[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CreatorActions_post"
            });
          ;
          const v871 = true;
          const v872 = await txn1.getOutput('CreatorActions_post', 'v871', ctc5, v871);
          
          const v1568 = v729;
          sim_r.isHalt = false;
          
          break;
          }
        case 'CreatorActions_withdraw0_40': {
          const v940 = v826[1];
          
          break;
          }
        case 'SubscriberActions_subscribe0_40': {
          const v1051 = v826[1];
          
          break;
          }
        case 'SubscriberActions_unsubscribe0_40': {
          const v1162 = v826[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
  switch (v826[0]) {
    case 'CreatorActions_post0_40': {
      const v829 = v826[1];
      undefined /* setApiDetails */;
      const v837 = stdlib.addressEq(v825, v721);
      stdlib.assert(v837, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:52:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
        msg: null,
        who: 'CreatorActions_post'
        });
      ;
      const v871 = true;
      const v872 = await txn1.getOutput('CreatorActions_post', 'v871', ctc5, v871);
      if (v532) {
        stdlib.protect(ctc0, await interact.out(v829, v872), {
          at: './index.rsh:40:13:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)', 'at ./index.rsh:44:18:application call to "resolve" (defined at: ./index.rsh:43:30:function exp)', 'at ./index.rsh:43:30:application call to [unknown function] (defined at: ./index.rsh:43:30:function exp)'],
          msg: 'out',
          who: 'CreatorActions_post'
          });
        }
      else {
        }
      
      const v1568 = v729;
      return;
      
      break;
      }
    case 'CreatorActions_withdraw0_40': {
      const v940 = v826[1];
      return;
      break;
      }
    case 'SubscriberActions_subscribe0_40': {
      const v1051 = v826[1];
      return;
      break;
      }
    case 'SubscriberActions_unsubscribe0_40': {
      const v1162 = v826[1];
      return;
      break;
      }
    }
  
  
  };
export async function _CreatorActions_withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _CreatorActions_withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _CreatorActions_withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    post: ctc5,
    premium: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Data({
    CreatorActions_post0_40: ctc8,
    CreatorActions_withdraw0_40: ctc4,
    SubscriberActions_subscribe0_40: ctc4,
    SubscriberActions_unsubscribe0_40: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v721, v722, v729] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc3]);
  const v786 = ctc.selfAddress();
  const v788 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:81:41:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to "runCreatorActions_withdraw0_40" (defined at: ./index.rsh:81:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'in',
    who: 'CreatorActions_withdraw'
    });
  const v789 = stdlib.addressEq(v786, v721);
  stdlib.assert(v789, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:41:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to "runCreatorActions_withdraw0_40" (defined at: ./index.rsh:81:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: null,
    who: 'CreatorActions_withdraw'
    });
  const v794 = ['CreatorActions_withdraw0_40', v788];
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v722, v729, v794],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
      
      switch (v826[0]) {
        case 'CreatorActions_post0_40': {
          const v829 = v826[1];
          
          break;
          }
        case 'CreatorActions_withdraw0_40': {
          const v940 = v826[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CreatorActions_withdraw"
            });
          ;
          const v1001 = true;
          const v1002 = await txn1.getOutput('CreatorActions_withdraw', 'v1001', ctc6, v1001);
          
          const v1011 = stdlib.sub(v729, v729);
          sim_r.txns.push({
            kind: 'from',
            to: v721,
            tok: undefined /* Nothing */
            });
          const v1578 = v1011;
          sim_r.isHalt = false;
          
          break;
          }
        case 'SubscriberActions_subscribe0_40': {
          const v1051 = v826[1];
          
          break;
          }
        case 'SubscriberActions_unsubscribe0_40': {
          const v1162 = v826[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
  switch (v826[0]) {
    case 'CreatorActions_post0_40': {
      const v829 = v826[1];
      return;
      break;
      }
    case 'CreatorActions_withdraw0_40': {
      const v940 = v826[1];
      undefined /* setApiDetails */;
      const v951 = stdlib.addressEq(v825, v721);
      stdlib.assert(v951, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:41:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
        msg: null,
        who: 'CreatorActions_withdraw'
        });
      ;
      const v1001 = true;
      const v1002 = await txn1.getOutput('CreatorActions_withdraw', 'v1001', ctc6, v1001);
      if (v532) {
        stdlib.protect(ctc0, await interact.out(v940, v1002), {
          at: './index.rsh:81:13:application',
          fs: ['at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)', 'at ./index.rsh:85:18:application call to "resolve" (defined at: ./index.rsh:84:30:function exp)', 'at ./index.rsh:84:30:application call to [unknown function] (defined at: ./index.rsh:84:30:function exp)'],
          msg: 'out',
          who: 'CreatorActions_withdraw'
          });
        }
      else {
        }
      
      const v1011 = stdlib.sub(v729, v729);
      ;
      const v1578 = v1011;
      return;
      
      break;
      }
    case 'SubscriberActions_subscribe0_40': {
      const v1051 = v826[1];
      return;
      break;
      }
    case 'SubscriberActions_unsubscribe0_40': {
      const v1162 = v826[1];
      return;
      break;
      }
    }
  
  
  };
export async function Subscriber(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    post: ctc3,
    premium: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    CreatorActions_post0_40: ctc6,
    CreatorActions_withdraw0_40: ctc7,
    SubscriberActions_subscribe0_40: ctc7,
    SubscriberActions_unsubscribe0_40: ctc7
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v722], secs: v724, time: v723, didSend: v27, from: v721 } = txn1;
  ;
  let v726 = v723;
  let v729 = stdlib.checkedBigNumberify('./index.rsh:27:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn2;
    switch (v826[0]) {
      case 'CreatorActions_post0_40': {
        const v829 = v826[1];
        undefined /* setApiDetails */;
        const v837 = stdlib.addressEq(v825, v721);
        stdlib.assert(v837, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:52:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:40:52:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Subscriber'
          });
        ;
        const v865 = v829[stdlib.checkedBigNumberify('./index.rsh:40:12:spread', stdlib.UInt_max, '0')];
        const v866 = v865.post;
        const v867 = v865.premium;
        const v871 = true;
        await txn2.getOutput('CreatorActions_post', 'v871', ctc4, v871);
        const v880 = ctc.selfAddress();
        if (v867) {
          const v882 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v880), null);
          let v883;
          switch (v882[0]) {
            case 'None': {
              const v884 = v882[1];
              v883 = false;
              
              break;
              }
            case 'Some': {
              const v885 = v882[1];
              v883 = true;
              
              break;
              }
            }
          if (v883) {
            stdlib.protect(ctc0, await interact.viewPost(v866), {
              at: './index.rsh:50:34:application',
              fs: ['at ./index.rsh:46:26:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:43:30:application call to [unknown function] (defined at: ./index.rsh:43:30:function exp)'],
              msg: 'viewPost',
              who: 'Subscriber'
              });
            }
          else {
            }
          }
        else {
          stdlib.protect(ctc0, await interact.viewPost(v866), {
            at: './index.rsh:54:32:application',
            fs: ['at ./index.rsh:46:26:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:43:30:application call to [unknown function] (defined at: ./index.rsh:43:30:function exp)'],
            msg: 'viewPost',
            who: 'Subscriber'
            });
          }
        
        const cv726 = v827;
        const cv729 = v729;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      case 'CreatorActions_withdraw0_40': {
        const v940 = v826[1];
        undefined /* setApiDetails */;
        const v951 = stdlib.addressEq(v825, v721);
        stdlib.assert(v951, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:82:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:41:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:81:41:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Subscriber'
          });
        ;
        const v1001 = true;
        await txn2.getOutput('CreatorActions_withdraw', 'v1001', ctc4, v1001);
        const v1011 = stdlib.sub(v729, v729);
        ;
        const cv726 = v827;
        const cv729 = v1011;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      case 'SubscriberActions_subscribe0_40': {
        const v1051 = v826[1];
        undefined /* setApiDetails */;
        const v1065 = stdlib.addressEq(v825, v721);
        const v1067 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v825), null);
        let v1068;
        switch (v1067[0]) {
          case 'None': {
            const v1069 = v1067[1];
            v1068 = false;
            
            break;
            }
          case 'Some': {
            const v1070 = v1067[1];
            v1068 = true;
            
            break;
            }
          }
        const v1071 = v1068 ? false : true;
        const v1072 = v1065 ? false : v1071;
        stdlib.assert(v1072, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:45:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Subscriber'
          });
        const v1074 = stdlib.mul(v722, stdlib.checkedBigNumberify('./index.rsh:64:38:decimal', stdlib.UInt_max, '1000000'));
        const v1085 = stdlib.add(v729, v1074);
        ;
        let v1129;
        switch (v1067[0]) {
          case 'None': {
            const v1130 = v1067[1];
            v1129 = false;
            
            break;
            }
          case 'Some': {
            const v1131 = v1067[1];
            v1129 = true;
            
            break;
            }
          }
        const v1132 = v1129 ? false : true;
        const v1133 = v1065 ? false : v1132;
        stdlib.assert(v1133, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:57:application call to [unknown function] (defined at: ./index.rsh:64:57:function exp)'],
          msg: null,
          who: 'Subscriber'
          });
        const v1135 = true;
        await txn2.getOutput('SubscriberActions_subscribe', 'v1135', ctc4, v1135);
        await stdlib.mapSet(map0, v825, null);
        const cv726 = v827;
        const cv729 = v1085;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      case 'SubscriberActions_unsubscribe0_40': {
        const v1162 = v826[1];
        undefined /* setApiDetails */;
        const v1187 = stdlib.addressEq(v825, v721);
        const v1189 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v825), null);
        let v1190;
        switch (v1189[0]) {
          case 'None': {
            const v1191 = v1189[1];
            v1190 = false;
            
            break;
            }
          case 'Some': {
            const v1192 = v1189[1];
            v1190 = true;
            
            break;
            }
          }
        const v1193 = v1187 ? false : v1190;
        stdlib.assert(v1193, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:47:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
          msg: null,
          who: 'Subscriber'
          });
        ;
        let v1259;
        switch (v1189[0]) {
          case 'None': {
            const v1260 = v1189[1];
            v1259 = false;
            
            break;
            }
          case 'Some': {
            const v1261 = v1189[1];
            v1259 = true;
            
            break;
            }
          }
        const v1262 = v1187 ? false : v1259;
        stdlib.assert(v1262, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
          msg: null,
          who: 'Subscriber'
          });
        const v1264 = true;
        await txn2.getOutput('SubscriberActions_unsubscribe', 'v1264', ctc4, v1264);
        await stdlib.mapSet(map0, v825, undefined /* Nothing */);
        const cv726 = v827;
        const cv729 = v729;
        
        v726 = cv726;
        v729 = cv729;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  };
export async function _SubscriberActions_subscribe3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SubscriberActions_subscribe3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SubscriberActions_subscribe3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    post: ctc5,
    premium: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Data({
    CreatorActions_post0_40: ctc8,
    CreatorActions_withdraw0_40: ctc4,
    SubscriberActions_subscribe0_40: ctc4,
    SubscriberActions_unsubscribe0_40: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v721, v722, v729] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc3]);
  const v753 = ctc.selfAddress();
  const v755 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:61:45:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to "runSubscriberActions_subscribe0_40" (defined at: ./index.rsh:61:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'in',
    who: 'SubscriberActions_subscribe'
    });
  const v756 = stdlib.addressEq(v753, v721);
  const v758 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v753), null);
  let v759;
  switch (v758[0]) {
    case 'None': {
      const v760 = v758[1];
      v759 = false;
      
      break;
      }
    case 'Some': {
      const v761 = v758[1];
      v759 = true;
      
      break;
      }
    }
  const v762 = v759 ? false : true;
  const v763 = v756 ? false : v762;
  stdlib.assert(v763, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:45:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to "runSubscriberActions_subscribe0_40" (defined at: ./index.rsh:61:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: null,
    who: 'SubscriberActions_subscribe'
    });
  const v768 = ['SubscriberActions_subscribe0_40', v755];
  
  let v809;
  switch (v758[0]) {
    case 'None': {
      const v810 = v758[1];
      v809 = false;
      
      break;
      }
    case 'Some': {
      const v811 = v758[1];
      v809 = true;
      
      break;
      }
    }
  const v812 = v809 ? false : true;
  const v813 = v756 ? false : v812;
  stdlib.assert(v813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:45:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: null,
    who: 'SubscriberActions_subscribe'
    });
  const v815 = stdlib.mul(v722, stdlib.checkedBigNumberify('./index.rsh:64:38:decimal', stdlib.UInt_max, '1000000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v722, v729, v768],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v815, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
      
      switch (v826[0]) {
        case 'CreatorActions_post0_40': {
          const v829 = v826[1];
          
          break;
          }
        case 'CreatorActions_withdraw0_40': {
          const v940 = v826[1];
          
          break;
          }
        case 'SubscriberActions_subscribe0_40': {
          const v1051 = v826[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SubscriberActions_subscribe"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v825), null);
          const v1074 = stdlib.mul(v722, stdlib.checkedBigNumberify('./index.rsh:64:38:decimal', stdlib.UInt_max, '1000000'));
          const v1085 = stdlib.add(v729, v1074);
          sim_r.txns.push({
            amt: v1074,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1135 = true;
          const v1136 = await txn1.getOutput('SubscriberActions_subscribe', 'v1135', ctc6, v1135);
          
          await stdlib.simMapSet(sim_r, 0, v825, null);
          const v1588 = v1085;
          sim_r.isHalt = false;
          
          break;
          }
        case 'SubscriberActions_unsubscribe0_40': {
          const v1162 = v826[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
  switch (v826[0]) {
    case 'CreatorActions_post0_40': {
      const v829 = v826[1];
      return;
      break;
      }
    case 'CreatorActions_withdraw0_40': {
      const v940 = v826[1];
      return;
      break;
      }
    case 'SubscriberActions_subscribe0_40': {
      const v1051 = v826[1];
      undefined /* setApiDetails */;
      const v1065 = stdlib.addressEq(v825, v721);
      const v1067 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v825), null);
      let v1068;
      switch (v1067[0]) {
        case 'None': {
          const v1069 = v1067[1];
          v1068 = false;
          
          break;
          }
        case 'Some': {
          const v1070 = v1067[1];
          v1068 = true;
          
          break;
          }
        }
      const v1071 = v1068 ? false : true;
      const v1072 = v1065 ? false : v1071;
      stdlib.assert(v1072, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:61:45:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:61:45:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
        msg: null,
        who: 'SubscriberActions_subscribe'
        });
      const v1074 = stdlib.mul(v722, stdlib.checkedBigNumberify('./index.rsh:64:38:decimal', stdlib.UInt_max, '1000000'));
      const v1085 = stdlib.add(v729, v1074);
      ;
      let v1129;
      switch (v1067[0]) {
        case 'None': {
          const v1130 = v1067[1];
          v1129 = false;
          
          break;
          }
        case 'Some': {
          const v1131 = v1067[1];
          v1129 = true;
          
          break;
          }
        }
      const v1132 = v1129 ? false : true;
      const v1133 = v1065 ? false : v1132;
      stdlib.assert(v1133, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:62:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:57:application call to [unknown function] (defined at: ./index.rsh:64:57:function exp)'],
        msg: null,
        who: 'SubscriberActions_subscribe'
        });
      const v1135 = true;
      const v1136 = await txn1.getOutput('SubscriberActions_subscribe', 'v1135', ctc6, v1135);
      if (v532) {
        stdlib.protect(ctc0, await interact.out(v1051, v1136), {
          at: './index.rsh:61:13:application',
          fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:13:function exp)', 'at ./index.rsh:65:18:application call to "resolve" (defined at: ./index.rsh:64:57:function exp)', 'at ./index.rsh:64:57:application call to [unknown function] (defined at: ./index.rsh:64:57:function exp)'],
          msg: 'out',
          who: 'SubscriberActions_subscribe'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v825, null);
      const v1588 = v1085;
      return;
      
      break;
      }
    case 'SubscriberActions_unsubscribe0_40': {
      const v1162 = v826[1];
      return;
      break;
      }
    }
  
  
  };
export async function _SubscriberActions_unsubscribe3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SubscriberActions_unsubscribe3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SubscriberActions_unsubscribe3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1000'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    post: ctc5,
    premium: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Data({
    CreatorActions_post0_40: ctc8,
    CreatorActions_withdraw0_40: ctc4,
    SubscriberActions_subscribe0_40: ctc4,
    SubscriberActions_unsubscribe0_40: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v721, v722, v729] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc3]);
  const v770 = ctc.selfAddress();
  const v772 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:71:47:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to "runSubscriberActions_unsubscribe0_40" (defined at: ./index.rsh:71:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: 'in',
    who: 'SubscriberActions_unsubscribe'
    });
  const v773 = stdlib.addressEq(v770, v721);
  const v775 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v770), null);
  let v776;
  switch (v775[0]) {
    case 'None': {
      const v777 = v775[1];
      v776 = false;
      
      break;
      }
    case 'Some': {
      const v778 = v775[1];
      v776 = true;
      
      break;
      }
    }
  const v779 = v773 ? false : v776;
  stdlib.assert(v779, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:47:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to "runSubscriberActions_unsubscribe0_40" (defined at: ./index.rsh:71:12:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: null,
    who: 'SubscriberActions_unsubscribe'
    });
  const v784 = ['SubscriberActions_unsubscribe0_40', v772];
  
  let v820;
  switch (v775[0]) {
    case 'None': {
      const v821 = v775[1];
      v820 = false;
      
      break;
      }
    case 'Some': {
      const v822 = v775[1];
      v820 = true;
      
      break;
      }
    }
  const v823 = v773 ? false : v820;
  stdlib.assert(v823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:47:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
    msg: null,
    who: 'SubscriberActions_unsubscribe'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v721, v722, v729, v784],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
      
      switch (v826[0]) {
        case 'CreatorActions_post0_40': {
          const v829 = v826[1];
          
          break;
          }
        case 'CreatorActions_withdraw0_40': {
          const v940 = v826[1];
          
          break;
          }
        case 'SubscriberActions_subscribe0_40': {
          const v1051 = v826[1];
          
          break;
          }
        case 'SubscriberActions_unsubscribe0_40': {
          const v1162 = v826[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SubscriberActions_unsubscribe"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v825), null);
          ;
          const v1264 = true;
          const v1265 = await txn1.getOutput('SubscriberActions_unsubscribe', 'v1264', ctc6, v1264);
          
          await stdlib.simMapSet(sim_r, 0, v825, undefined /* Nothing */);
          const v1598 = v729;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v826], secs: v828, time: v827, didSend: v532, from: v825 } = txn1;
  switch (v826[0]) {
    case 'CreatorActions_post0_40': {
      const v829 = v826[1];
      return;
      break;
      }
    case 'CreatorActions_withdraw0_40': {
      const v940 = v826[1];
      return;
      break;
      }
    case 'SubscriberActions_subscribe0_40': {
      const v1051 = v826[1];
      return;
      break;
      }
    case 'SubscriberActions_unsubscribe0_40': {
      const v1162 = v826[1];
      undefined /* setApiDetails */;
      const v1187 = stdlib.addressEq(v825, v721);
      const v1189 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v825), null);
      let v1190;
      switch (v1189[0]) {
        case 'None': {
          const v1191 = v1189[1];
          v1190 = false;
          
          break;
          }
        case 'Some': {
          const v1192 = v1189[1];
          v1190 = true;
          
          break;
          }
        }
      const v1193 = v1187 ? false : v1190;
      stdlib.assert(v1193, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:71:47:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:71:47:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
        msg: null,
        who: 'SubscriberActions_unsubscribe'
        });
      ;
      let v1259;
      switch (v1189[0]) {
        case 'None': {
          const v1260 = v1189[1];
          v1259 = false;
          
          break;
          }
        case 'Some': {
          const v1261 = v1189[1];
          v1259 = true;
          
          break;
          }
        }
      const v1262 = v1187 ? false : v1259;
      stdlib.assert(v1262, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:72:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
        msg: null,
        who: 'SubscriberActions_unsubscribe'
        });
      const v1264 = true;
      const v1265 = await txn1.getOutput('SubscriberActions_unsubscribe', 'v1264', ctc6, v1264);
      if (v532) {
        stdlib.protect(ctc0, await interact.out(v1162, v1265), {
          at: './index.rsh:71:13:application',
          fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:13:function exp)', 'at ./index.rsh:75:18:application call to "resolve" (defined at: ./index.rsh:74:31:function exp)', 'at ./index.rsh:74:31:application call to [unknown function] (defined at: ./index.rsh:74:31:function exp)'],
          msg: 'out',
          who: 'SubscriberActions_unsubscribe'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v825, undefined /* Nothing */);
      const v1598 = v729;
      return;
      
      break;
      }
    }
  
  
  };
export async function CreatorActions_post(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CreatorActions_post expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CreatorActions_post expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _CreatorActions_post3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function CreatorActions_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CreatorActions_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CreatorActions_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _CreatorActions_withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function SubscriberActions_subscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SubscriberActions_subscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SubscriberActions_subscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _SubscriberActions_subscribe3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function SubscriberActions_unsubscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SubscriberActions_unsubscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SubscriberActions_unsubscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _SubscriberActions_unsubscribe3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`CreatorActions_post((byte[1000],byte))byte`, `CreatorActions_withdraw()byte`, `SubscriberActions_subscribe()byte`, `SubscriberActions_unsubscribe()byte`],
    pure: [],
    sigs: [`CreatorActions_post((byte[1000],byte))byte`, `CreatorActions_withdraw()byte`, `SubscriberActions_subscribe()byte`, `SubscriberActions_unsubscribe()byte`]
    },
  appApproval: `BiAIAAECA+kHw9fbigbE8+nOC6Or37AFJgMBAAEBACI1ADEYQQLAKmRJIls1AYEIWzUCMRkjEkEACDEAKChmQgKONhoAF0lBAGkiNQQjNQZJIQUMQAAvSSEGDEAAFCEGEkQqNf+AAQI0/1AhBK9QQgBXIQUSRCo1/4ABAzT/UCEEr1BCAENJIQcMQAASIQcSRCo1/yk0/1AhBK9QQgAqgbW1rYYDEkQ2GgE1/yg0/1BCABY2GgIXNQQ2GgM2GgEXSSQMQAF5JBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/4EgWzX+gShbNf1JNQU1/IAElFlXZzT8ULA0/CJVSSQMQADdSSUMQABjJRJEMQA0/xI1+zEAiAHnSTX6IlVAAAYiNflCAAYjNflCAAA0+xQ0+RBENPoiVUAABiI1+EIABiM1+EIAADT7FDT4EESACQAAAAAAAATwAbApNQcxACgoZjT/NP4yBjT9QgEDSDEANP8SNfsxAIgBhkk1+iJVQAAGIjX5QgAGIzX5QgAANPsUNPkUEEQ0/oHAhD0LNfg0+IgBaTT6IlVAAAYiNfdCAAYjNfdCAAA0+xQ09xQQRIAJAAAAAAAABG8BsCk1BzEAKClmNP80/jIGNP00+AhCAI9JIwxAADNIMQA0/xJEgAkAAAAAAAAD6QGwKTUHsSKyATT9sggjshA0/7IHszT/NP4yBjT9SQlCAFZIMQA0/xJEgAkAAAAAAAADZwGwKTUHNP80/jIGNP1CADUiEkSBoI0GiADIIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQA0/zIGIkIAADX/Nf41/Uk1/DT9FlA0/xZQKEsBVwAwZ0glNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v722",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v722",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem5",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem6",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem7",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem8",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem9",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem10",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem11",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem12",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem13",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem14",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem15",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem16",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem17",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem18",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem19",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem20",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem21",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem22",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem23",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem24",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem25",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem26",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem27",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem28",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem29",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem30",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes8",
                                "name": "elem31",
                                "type": "bytes8"
                              }
                            ],
                            "internalType": "struct T7",
                            "name": "_post",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_premium",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_CreatorActions_post0_40",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CreatorActions_withdraw0_40",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_SubscriberActions_subscribe0_40",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_SubscriberActions_unsubscribe0_40",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v826",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1001",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1135",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1264",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v871",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem8",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem9",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem10",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem11",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem12",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem13",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem14",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem15",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem16",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem17",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem18",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem19",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem20",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem21",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem22",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem23",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem24",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem25",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem26",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem27",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem28",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem29",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem30",
                "type": "bytes32"
              },
              {
                "internalType": "bytes8",
                "name": "elem31",
                "type": "bytes8"
              }
            ],
            "internalType": "struct T7",
            "name": "_post",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "_premium",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "CreatorActions_post",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CreatorActions_withdraw",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SubscriberActions_subscribe",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SubscriberActions_unsubscribe",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem5",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem6",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem7",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem8",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem9",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem10",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem11",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem12",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem13",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem14",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem15",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem16",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem17",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem18",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem19",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem20",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem21",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem22",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem23",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem24",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem25",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem26",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem27",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem28",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem29",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem30",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes8",
                                "name": "elem31",
                                "type": "bytes8"
                              }
                            ],
                            "internalType": "struct T7",
                            "name": "_post",
                            "type": "tuple"
                          },
                          {
                            "internalType": "bool",
                            "name": "_premium",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T8",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_CreatorActions_post0_40",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_CreatorActions_withdraw0_40",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_SubscriberActions_subscribe0_40",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_SubscriberActions_unsubscribe0_40",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v826",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200199538038062001995833981016040819052620000269162000277565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000be565b6200008c6200018c565b80513390526020808301515182518201528082018051439052516000910152620000b681620000e8565b505062000356565b81620000e45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000116604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b03168082528251602090810151818401908152818501518201516040808601918252600360005543600155805180850195909552915184830152516060808501919091528151808503909101815260809093019052815162000187926002920190620001d1565b505050565b60408051608081018252600091810182815260608201929092529081908152602001620001cc604051806040016040528060008152602001600081525090565b905290565b828054620001df9062000319565b90600052602060002090601f0160209004810192826200020357600085556200024e565b82601f106200021e57805160ff19168380011785556200024e565b828001600101855582156200024e579182015b828111156200024e57825182559160200191906001019062000231565b506200025c92915062000260565b5090565b5b808211156200025c576000815560010162000261565b60008183036040808212156200028c57600080fd5b80518082016001600160401b038082118383101715620002bc57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620002d657600080fd5b8351945060208501915084821081831117156200030357634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200032e57607f821691505b602082108114156200035057634e487b7160e01b600052602260045260246000fd5b50919050565b61162f80620003666000396000f3fe6080604052600436106100845760003560e01c80638742b8ad116100565780638742b8ad146101165780638acd93c21461011e578063ab53f2c614610126578063beee773614610149578063f4310b0f1461015c57005b80631e93b0f11461008d5780633bc5b7bf146100b15780638190d79d146100de578063832307571461010157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100bd57600080fd5b506100d16100cc366004610e48565b610164565b6040516100a89190610e82565b6100f16100ec36600461115a565b61017b565b60405190151581526020016100a8565b34801561010d57600080fd5b5060015461009e565b6100f16101cb565b6100f1610217565b34801561013257600080fd5b5061013b610263565b6040516100a8929190611177565b61008b6101573660046111d4565b610300565b6100f1610340565b61016c610b78565b6101758261038c565b92915050565b6000610185610b9b565b602081810180515160009081905290515182015185905260408051608081018252828152928301829052820181905260608201526101c38282610450565b519392505050565b60006101d5610b9b565b6020818101515160019052604080516080810182526000808252928101839052908101829052606081019190915261020d8282610450565b6020015192915050565b6000610221610b9b565b602081810151516002905260408051608081018252600080825292810183905290810182905260608101919091526102598282610450565b6040015192915050565b600060606000546002808054610278906111ed565b80601f01602080910402602001604051908101604052809291908181526020018280546102a4906111ed565b80156102f15780601f106102c6576101008083540402835291602001916102f1565b820191906000526020600020905b8154815290600101906020018083116102d457829003601f168201915b50505050509050915091509091565b60408051608081018252600080825260208201819052918101829052606081019190915261033c61033636849003840184611222565b82610450565b5050565b600061034a610b9b565b602081810151516003905260408051608081018252600080825292810183905290810182905260608101919091526103828282610450565b6060015192915050565b610394610b78565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156103c3576103c3610e6c565b1415610440576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561040457610404610e6c565b600181111561041557610415610e6c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6104606003600054146012610ab2565b815161047b90158061047457508251600154145b6013610ab2565b60008080556002805461048d906111ed565b80601f01602080910402602001604051908101604052809291908181526020018280546104b9906111ed565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b505050505080602001905181019061051e91906112f0565b9050610528610bba565b7f3a8565e28992d6a8722eb699730a77e4befceeb69a4cc539bdf94ac8f45a55173385604051610559929190611360565b60405180910390a1600060208501515151600381111561057b5761057b610e6c565b1415610623578151610599906001600160a01b031633146008610ab2565b6105a534156009610ab2565b604051600181527f59e5d16248053f76716bb281c5ad4ba6a87e3aa344c52e82358bcf04f635d0809060200160405180910390a1600183526105e5610c00565b825181516001600160a01b03909116905260208084015182518201528082018051439052604085015190519091015261061d81610ad7565b50610aac565b600160208501515151600381111561063d5761063d610e6c565b141561072a57815161065b906001600160a01b03163314600a610ab2565b6106673415600b610ab2565b604051600181527f0c28442082e689ad65f3507b7b5c6b90b64a933421eb1ebb2df5bfc467cf50189060200160405180910390a160016020840152815160408084015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106df573d6000803e3d6000fd5b506106e8610c00565b825181516001600160a01b0390911690526020808401518251820152810151439052604083015161071990806115ab565b602080830151015261061d81610ad7565b600260208501515151600381111561074457610744610e6c565b141561091d5781516001600160a01b03163390811482526107649061038c565b6020820181905251600090600181111561078057610780610e6c565b141561079257600060408201526107b9565b600160208201515160018111156107ab576107ab610e6c565b14156107b957600160408201525b80516107e4906107da5781604001516107d35760016107dd565b60006107dd565b60005b600c610ab2565b620f424082602001516107f791906115c2565b6060820181905261080b903414600d610ab2565b6000602082015151600181111561082457610824610e6c565b1415610836576000608082015261085d565b6001602082015151600181111561084f5761084f610e6c565b141561085d57600160808201525b80516108889061087e578160800151610877576001610881565b6000610881565b60005b600e610ab2565b604051600181527fd667d8d3ff9344ab88173acff7c4a1c26143b3b414f37bb822cb4d9193747d9f9060200160405180910390a160016040848101829052336000908152600460205220805462ff00ff191690911790556108e7610c00565b825181516001600160a01b03909116905260208084015182518201528101514390526060820151604084015161071991906115e1565b600360208501515151600381111561093757610937610e6c565b1415610aac5781516001600160a01b03163390811460a083015261095a9061038c565b60c0820181905251600090600181111561097657610976610e6c565b141561098857600060e08201526109af565b600160c08201515160018111156109a1576109a1610e6c565b14156109af57600160e08201525b6109cf8160a001516109c5578160e001516109c8565b60005b600f610ab2565b6109db34156010610ab2565b600060c08201515160018111156109f4576109f4610e6c565b1415610a07576000610100820152610a2f565b600160c0820151516001811115610a2057610a20610e6c565b1415610a2f5760016101008201525b610a508160a00151610a4657816101000151610a49565b60005b6011610ab2565b604051600181527f7ed7fe3c55245ab10f0c657f73bd67de3ff671aec4fc6d87167d657d350514989060200160405180910390a160016060840152336000908152600460205260409020805462ffffff191690556105e5610c00565b50505050565b8161033c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b610b04604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b031680825282516020908101518184019081528185015182015160408086019182526003600055436001558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151610b73926002920190610c3f565b505050565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001610bb5610cc3565b905290565b604051806101200160405280600015158152602001610bd7610b78565b81526000602082018190526040820181905260608201819052608082015260a001610b87610b78565b60408051608081018252600091810182815260608201929092529081908152602001610bb5604051806040016040528060008152602001600081525090565b828054610c4b906111ed565b90600052602060002090601f016020900481019282610c6d5760008555610cb3565b82601f10610c8657805160ff1916838001178555610cb3565b82800160010185558215610cb3579182015b82811115610cb3578251825591602001919060010190610c98565b50610cbf929150610e00565b5090565b6040518060200160405280610bb56040805160a081019091528060008152602001610e1560408051610460810182526000606082018181526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290526101408301829052610160830182905261018083018290526101a083018290526101c083018290526101e08301829052610200830182905261022083018290526102408301829052610260830182905261028083018290526102a083018290526102c083018290526102e08301829052610300830182905261032083018290526103408301829052610360830182905261038083018290526103a083018290526103c083018290526103e08301829052610400830182905261042083018290526104408301829052602083019081529282015290815290565b5b80821115610cbf5760008155600101610e01565b81526000602082018190526040820181905260609091015290565b6001600160a01b0381168114610e4557600080fd5b50565b600060208284031215610e5a57600080fd5b8135610e6581610e30565b9392505050565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610e9957610e99610e6c565b8083525060208301511515602083015260408301511515604083015292915050565b6040805190810167ffffffffffffffff81118282101715610eec57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610400810167ffffffffffffffff81118282101715610eec57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610eec57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610eec57634e487b7160e01b600052604160045260246000fd5b80356001600160c01b03198116811461044b57600080fd5b8035801515811461044b57600080fd5b6000818303610420811215610fc257600080fd5b610fca610ebb565b915061040080821215610fdc57600080fd5b610fe4610ef2565b843581526020808601359082015260408086013590820152606080860135908201526080808601359082015260a0808601359082015260c0808601359082015260e08086013590820152610100808601359082015261012080860135908201526101408086013590820152610160808601359082015261018080860135908201526101a080860135908201526101c080860135908201526101e08086013590820152610200808601359082015261022080860135908201526102408086013590820152610260808601359082015261028080860135908201526102a080860135908201526102c080860135908201526102e08086013590820152610300808601359082015261032080860135908201526103408086013590820152610360808601359082015261038080860135908201526103a080860135908201526103c0808601359082015291506103e061113b818601610f86565b9083015281835261114d848201610f9e565b6020840152505092915050565b6000610420828403121561116d57600080fd5b610e658383610fae565b82815260006020604081840152835180604085015260005b818110156111ab5785810183015185820160600152820161118f565b818111156111bd576000606083870101525b50601f01601f191692909201606001949350505050565b60006104c082840312156111e757600080fd5b50919050565b600181811c9082168061120157607f821691505b602082108114156111e757634e487b7160e01b600052602260045260246000fd5b60008183036104c081121561123657600080fd5b61123e610ebb565b833581526104a080601f198401121561125657600080fd5b61125e610f24565b611266610f55565b60208701356004811061127857600080fd5b8152610420603f198601121561128d57600080fd5b611295610f24565b94506112a48860408901610fae565b85528460208201526112b96104608801610f9e565b60408201526112cb6104808801610f9e565b60608201526112db838801610f9e565b60808201528152602083015250949350505050565b60006060828403121561130257600080fd5b6040516060810181811067ffffffffffffffff8211171561133357634e487b7160e01b600052604160045260246000fd5b604052825161134181610e30565b8152602083810151908201526040928301519281019290925250919050565b6001600160a01b038316815281516020808301919091528201515180516104e0830191906004811061139457611394610e6c565b6040848101919091526020828101515180518051606080890191909152818401516080808a01919091528286015160a0808b01919091528284015160c0808c01919091528285015160e0808d019190915291850151610100808d019190915290850151610120808d019190915291850151610140808d019190915290850151610160808d019190915291850151610180808d0191909152908501516101a0808d0191909152918501516101c0808d0191909152908501516101e0808d019190915291850151610200808d019190915290850151610220808d019190915291850151610240808d019190915290850151610260808d019190915291850151610280808d0191909152908501516102a0808d0191909152918501516102c0808d0191909152908501516102e0808d019190915291850151610300808d019190915290850151610320808d019190915291850151610340808d019190915290850151610360808d019190915291850151610380808d0191909152908501516103a0808d0191909152918501516103c0808d0191909152908501516103e0808d0191909152918501516104008c01528401516104208b0152909201516001600160c01b031916610440890152919092015115156104608701529183015115156104808601529082015115156104a0850152015115156104c09092019190915292915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156115bd576115bd611595565b500390565b60008160001904831182151516156115dc576115dc611595565b500290565b600082198211156115f4576115f4611595565b50019056fea264697066735822122070102b595ec28f28d278bb7d4b5a9e067d5c3767a418d0f24e2d6c044105351c64736f6c634300080c0033`,
  BytecodeLen: 6549,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:37:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "CreatorActions_post": CreatorActions_post,
  "CreatorActions_withdraw": CreatorActions_withdraw,
  "Subscriber": Subscriber,
  "SubscriberActions_subscribe": SubscriberActions_subscribe,
  "SubscriberActions_unsubscribe": SubscriberActions_unsubscribe
  };
export const _APIs = {
  CreatorActions: {
    post: CreatorActions_post,
    withdraw: CreatorActions_withdraw
    },
  SubscriberActions: {
    subscribe: SubscriberActions_subscribe,
    unsubscribe: SubscriberActions_unsubscribe
    }
  };
