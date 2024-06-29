"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3860],{83860:function(e,t,n){n.d(t,{e:function(){return s}});var r=n(88863),a=n(72829),i=n(43255),o=n(12334),c=n(18411);async function s(e,t){let{chainId:n,timeout:s=0,...l}=t,u=e.getClient({chainId:n}),f=(0,c.s)(u,a.e,"waitForTransactionReceipt"),p=await f({...l,timeout:s});if("reverted"===p.status){let e=(0,c.s)(u,i.f,"getTransaction"),t=await e({hash:p.transactionHash}),n=(0,c.s)(u,o.RE,"call"),a=await n({...t,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0});throw Error(a?.data?(0,r.rR)(`0x${a.data.substring(138)}`):"unknown reason")}return{...p,chainId:u.chain.id}}},76667:function(e,t,n){n.d(t,{z:function(){return c}});let r=new Map,a=new Map;async function i(e,{cacheKey:t,cacheTime:n=1/0}){let i=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,r),i=t(e,a);return{clear:()=>{n.clear(),i.clear()},promise:n,response:i}}(t),o=i.response.get();if(o&&n>0&&new Date().getTime()-o.created.getTime()<n)return o.data;let c=i.promise.get();c||(c=e(),i.promise.set(c));try{let e=await c;return i.response.set({created:new Date,data:e}),e}finally{i.promise.clear()}}let o=e=>`blockNumber.${e}`;async function c(e,{cacheTime:t=e.cacheTime}={}){return BigInt(await i(()=>e.request({method:"eth_blockNumber"}),{cacheKey:o(e.uid),cacheTime:t}))}},43255:function(e,t,n){n.d(t,{f:function(){return o}});var r=n(42919),a=n(56870),i=n(34283);async function o(e,{blockHash:t,blockNumber:n,blockTag:o,hash:c,index:s}){let l=o||"latest",u=void 0!==n?(0,a.eC)(n):void 0,f=null;if(c?f=await e.request({method:"eth_getTransactionByHash",params:[c]}):t?f=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,a.eC)(s)]}):(u||l)&&(f=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[u||l,(0,a.eC)(s)]})),!f)throw new r.Bh({blockHash:t,blockNumber:n,blockTag:l,hash:c,index:s});return(e.chain?.formatters?.transaction?.format||i.Tr)(f)}},57433:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(42919),a=n(35879);async function i(e,{hash:t}){let n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new r.Yb({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||a.fA)(n)}},72829:function(e,t,n){n.d(t,{e:function(){return m}});var r=n(13013),a=n(42919),i=n(84304),o=n(60716),c=n(479),s=n(48849),l=n(36130),u=n(43255),f=n(57433),p=n(40115);async function m(e,{confirmations:t=1,hash:n,onReplaced:m,pollingInterval:d=e.pollingInterval,retryCount:w=6,retryDelay:b=({count:e})=>200*~~(1<<e),timeout:h}){let y,g,k;let N=(0,s.P)(["waitForTransactionReceipt",e.uid,n]),v=!1;return new Promise((s,T)=>{h&&setTimeout(()=>T(new a.mc({hash:n})),h);let B=(0,o.N7)(N,{onReplaced:m,resolve:s,reject:T},o=>{let s=(0,i.s)(e,p.q,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:d,async onBlockNumber(p){if(v)return;let m=p,d=e=>{s(),e(),B()};try{if(k){if(t>1&&(!k.blockNumber||m-k.blockNumber+1n<t))return;d(()=>o.resolve(k));return}if(y||(v=!0,await (0,c.J)(async()=>{(y=await (0,i.s)(e,u.f,"getTransaction")({hash:n})).blockNumber&&(m=y.blockNumber)},{delay:b,retryCount:w}),v=!1),k=await (0,i.s)(e,f.a,"getTransactionReceipt")({hash:n}),t>1&&(!k.blockNumber||m-k.blockNumber+1n<t))return;d(()=>o.resolve(k))}catch(n){if(n instanceof a.Bh||n instanceof a.Yb){if(!y){v=!1;return}try{g=y,v=!0;let n=await (0,c.J)(()=>(0,i.s)(e,l.Q,"getBlock")({blockNumber:m,includeTransactions:!0}),{delay:b,retryCount:w,shouldRetry:({error:e})=>e instanceof r.f});v=!1;let a=n.transactions.find(({from:e,nonce:t})=>e===g.from&&t===g.nonce);if(!a||(k=await (0,i.s)(e,f.a,"getTransactionReceipt")({hash:a.hash}),t>1&&(!k.blockNumber||m-k.blockNumber+1n<t)))return;let s="replaced";a.to===g.to&&a.value===g.value?s="repriced":a.from===a.to&&0n===a.value&&(s="cancelled"),d(()=>{o.onReplaced?.({reason:s,replacedTransaction:g,transaction:a,transactionReceipt:k}),o.resolve(k)})}catch(e){d(()=>o.reject(e))}}else d(()=>o.reject(n))}}})})})}},40115:function(e,t,n){n.d(t,{q:function(){return l}});var r=n(88863),a=n(84304),i=n(60716),o=n(48417),c=n(48849),s=n(76667);function l(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:l,onError:u,poll:f,pollingInterval:p=e.pollingInterval}){let m;return(void 0!==f?f:"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type))?(()=>{let r=(0,c.P)(["watchBlockNumber",e.uid,t,n,p]);return(0,i.N7)(r,{onBlockNumber:l,onError:u},r=>(0,o.$)(async()=>{try{let t=await (0,a.s)(e,s.z,"getBlockNumber")({cacheTime:0});if(m){if(t===m)return;if(t-m>1&&n)for(let e=m+1n;e<t;e++)r.onBlockNumber(e,m),m=e}(!m||t>m)&&(r.onBlockNumber(t,m),m=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:p}))})():(()=>{let a=(0,c.P)(["watchBlockNumber",e.uid,t,n]);return(0,i.N7)(a,{onBlockNumber:l,onError:u},t=>{let n=!0,a=()=>n=!1;return(async()=>{try{let i=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:o}=await i.subscribe({params:["newHeads"],onData(e){if(!n)return;let a=(0,r.y_)(e.result?.number);t.onBlockNumber(a,m),m=a},onError(e){t.onError?.(e)}});a=o,n||a()}catch(e){u?.(e)}})(),()=>a()})})()}},60716:function(e,t,n){n.d(t,{N7:function(){return o}});let r=new Map,a=new Map,i=0;function o(e,t,n){let o=++i,c=()=>r.get(e)||[],s=()=>{let t=c();r.set(e,t.filter(e=>e.id!==o))},l=()=>{let t=a.get(e);1===c().length&&t&&t(),s()},u=c();if(r.set(e,[...u,{id:o,fns:t}]),u&&u.length>0)return l;let f={};for(let e in t)f[e]=(...t)=>{let n=c();if(0!==n.length)for(let r of n)r.fns[e]?.(...t)};let p=n(f);return"function"==typeof p&&a.set(e,p),l}},48417:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(92909);function a(e,{emitOnBegin:t,initialWaitTime:n,interval:a}){let i=!0,o=()=>i=!1;return(async()=>{let c;t&&(c=await e({unpoll:o}));let s=await n?.(c)??a;await (0,r.D)(s);let l=async()=>{i&&(await e({unpoll:o}),await (0,r.D)(a),l())};l()})(),o}}}]);