import{r,R as p}from"./react-e18f0737.js";import{R}from"./react-router-e59ff506.js";import{c as F}from"./@remix-run-3dbd2488.js";/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b="startTransition",l=p[b];function y(e){let{basename:S,children:f,future:h,window:T}=e,s=r.useRef();s.current==null&&(s.current=F({window:T,v5Compat:!0}));let t=s.current,[n,i]=r.useState({action:t.action,location:t.location}),{v7_startTransition:o}=h||{},a=r.useCallback(c=>{o&&l?l(()=>i(c)):i(c)},[i,o]);return r.useLayoutEffect(()=>t.listen(a),[t,a]),r.createElement(R,{basename:S,children:f,location:n.location,navigationType:n.action,navigator:t})}var u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(u||(u={}));var m;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{y as B};
