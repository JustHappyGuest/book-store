const compose = (...funcs) => (comp) => (
    funcs.reduceRight((prevRes, f)=>f(prevRes),comp)
);

export default compose;

