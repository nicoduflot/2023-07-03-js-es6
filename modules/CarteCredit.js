export default CarteCredit{
    constructor(numeroCarte, codePin){
        this.numeroCarte = numeroCarte;
        this._codePin = codePin;
    }

    get getCodePin(){
        return this._codePin;
    }
}