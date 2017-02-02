// var testInt:number;
// testInt =5;
// var test:string ="this is ";
// console.log(test);
// var p = new pack();
// var cards = p.Cards();
// for(let c in cards)
// {
// 	console.log(c);
// }
var card = (function () {
    function card() {
    }
    return card;
}());
var pack = (function () {
    function pack() {
        this._pack = new Array();
    }
    pack.prototype.Cards = function () {
        return this.getCards();
    };
    pack.prototype.getCards = function () {
        var text = 'A,2,3,4,5,6,7,8,9,10,J,Q,K';
        var texts = text.split(",");
        //for(let sha in Object.keys(shape))
        for (var sha = 0; sha < 4; sha++) {
            for (var i = 0; i < texts.length; i++) {
                var _card = new card();
                _card.Shape = sha;
                _card.Text = texts[i];
                _card.Value = i + 1;
                this._pack.push(_card);
            }
        }
        this._pack.push(this.getJocker(shape.Club));
        this._pack.push(this.getJocker(shape.Diamond));
        return this._pack;
    };
    pack.prototype.getJocker = function (sh) {
        var _card = new card();
        _card.Shape = sh;
        _card.Text = "";
        _card.Value = 0;
        return _card;
    };
    return pack;
}());
var PackHelper = (function () {
    function PackHelper() {
        this._deck = new Array();
    }
    PackHelper.prototype.GetCards = function (nos) {
        if (nos === void 0) { nos = 1; }
        for (var i = 1; i <= nos; i++) {
            var _pack = new pack();
            var cards = _pack.Cards();
            for (var i_1 = 0; i_1 < cards.length; i_1++) {
                this._deck.push(cards[i_1]);
            }
        }
        return this._deck;
    };
    PackHelper.prototype.Shuffle = function () {
        if (this._deck.length == 0)
            this._deck = this.GetCards();
        var len = this._deck.length;
        var i, t;
        while (len) {
            i = Math.floor(Math.random() * len--);
            t = this._deck[len];
            this._deck[len] = this._deck[i];
            this._deck[i] = t;
        }
        return this._deck;
    };
    return PackHelper;
}());
var shape;
(function (shape) {
    shape[shape["Spade"] = 0] = "Spade";
    shape[shape["Club"] = 1] = "Club";
    shape[shape["Diamond"] = 2] = "Diamond";
    shape[shape["Heart"] = 3] = "Heart";
})(shape || (shape = {}));
var color;
(function (color) {
    color[color["Black"] = 0] = "Black";
    color[color["Red"] = 1] = "Red";
})(color || (color = {}));
