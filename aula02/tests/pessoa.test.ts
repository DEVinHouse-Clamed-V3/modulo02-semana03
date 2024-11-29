import Pessoa from "../classes/pessoa"

describe("testes classe pessoa", () => {
    it("deve criar uma classe pessoa ", () => {
        const pessoa1 = new Pessoa("Bruno", 25, "12345687945")

        expect(pessoa1.idade).toBe(25)
    })
})