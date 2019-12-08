describe("biggestInteger", function(){
    it("should return on emore than 1 number array", function(){
        let num = [4]
        let result = solution(num)
        expect(result).toEqual(5)
    })
    it("should return on emore than 2 number array", function(){
        let num = [3, 1]
        let result = solution(num)
        expect(result).toEqual(2)
    })
    it("should return one more than 3 number array", function(){
        let num = [3, 2, 5]
        let result = solution(num)
        expect(result).toEqual(4)
    })
})