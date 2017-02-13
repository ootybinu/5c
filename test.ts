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


class card {
	Shape: shape;
	//	Color:color;
	Text: string;
	Value: number;
	constructor() { }

}

class pack {
	private _pack: card[];

	Cards(): card[] {
		return this.getCards();
	}
	constructor() {
		this._pack = new Array<card>();
	}

	private getCards(): card[] {
		let text: string = 'A,2,3,4,5,6,7,8,9,10,J,Q,K';
		let texts: string[] = text.split(",");
		//for(let sha in Object.keys(shape))
		for (let sha = 0; sha < 4; sha++) {

			for (let i = 0; i < texts.length; i++) {
				let _card = new card();
				_card.Shape = sha;
				_card.Text = texts[i];
				_card.Value = i + 1;
				this._pack.push(_card);
			}
		}

		this._pack.push(this.getJocker(shape.Club));
		this._pack.push(this.getJocker(shape.Diamond));
		return this._pack;
	}

	private getJocker(sh: shape): card {
		let _card = new card();
		_card.Shape = sh;
		_card.Text = "";
		_card.Value = 0;
		return _card;
	}
}

class PackHelper {
	private _deck = new Array<card>();
	GetCards(nos: number=1): card[] {
		for (let i = 1; i <= nos; i++) {
			let _pack = new pack();
			let cards = _pack.Cards();
			for (let i=0; i<cards.length;i++) {
				this._deck.push(cards[i]);
			}
		}
		return this._deck;
	}
	Shuffle():card[]
	{
		if (this._deck.length == 0 )
			this._deck = this.GetCards();

		let len = this._deck.length;
		let i:number, t:card;
		while(len)
		{
			i = Math.floor(Math.random()*len--);
			t=this._deck[len];
			this._deck[len] = this._deck[i];
			this._deck[i] = t;

		}
		return this._deck;

	}
}

enum shape {
	Spade,
	Club,
	Diamond,
	Heart
}
enum color {
	Black,
	Red
}

class Player {
	Name:string;
	Id:string;
	DisplayName:string;
	constructor(argument) {
		// code...
	}

}

class Table {
	Players:Player[];
	CurrentPlayer:Player;

}
class Admin 
{
	private _players:Player[];
	
	Start(){

		this._players.push(this._players.shift());
	}
}