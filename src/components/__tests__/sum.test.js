const sum=(a,b)=>{
    return a+b;
}
// group the tescase it is alias of test
describe('sum function', () => {
    
it('should first', () => {
    
    expect(sum(1, 2)).toBe(3);

})
test('should second', () => {
    
    expect(sum(2, 3)).toBe(5);  
    
})
})
