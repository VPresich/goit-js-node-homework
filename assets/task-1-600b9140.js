import{i as o}from"./auxiliary-d9d3ef85.js";function i(a,c,s){const r=parseInt(a),n=parseFloat(c),e=parseFloat(s);if(!o(r))return"Error in quantity";if(!o(n))return"Error in pricePerDroid";if(!o(e))return"Error in customerCredits";const t=r*n;return t>e?"Insufficient funds!":`You ordered ${r} droids worth ${t} credits!`}console.log(i(5,3e3,23e3));console.log(i(3,1e3,15e3));console.log(i(10,5e3,8e3));console.log(i(8,2e3,1e4));console.log(i(10,500,5e3));function l(a,c,s){const r=parseInt(a),n=parseFloat(c),e=parseFloat(s.value);if(!o(r))return"Error in quantity";if(!o(n))return"Error in pricePerDroid";if(!o(e))return"Error in customerCredits";const t=r*n;return t>e?"Insufficient funds!":(s.value-=t,`You ordered ${r} droids worth ${t} credits!`)}export{l as m};