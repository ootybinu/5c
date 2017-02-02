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
	Shape:shape;
//	Color:color;
	Text:string;
	Value:number;
	constructor(){}

}

class pack{
	private _pack:card[] ;

	Cards():card[]{
		return this.getCards();
	}
	constructor(){
		this._pack=new Array();
	}

		private getCards():card[]{
		let text:string='A,2,3,4,5,6,7,8,9,10,J,Q,K';
		let texts:string[] = text.split(",");
		//for(let sha in Object.keys(shape))
		for (let sha =0;sha<4;sha++)
		{

			for (let i =0;i<texts.length;i++)
			{
				let _card = new card();
				_card.Shape=sha;
				_card.Text=texts[i];
				_card.Value=i+1;
				this._pack.push(_card);
			}
		}

		this._pack.push(this.getJocker(shape.Club));
		this._pack.push(this.getJocker(shape.Diamond));
		return  this._pack;
	}

	private getJocker(sh:shape):card{
		let _card =new card();
		_card.Shape=sh;
		_card.Text="";
		_card.Value=0;
		return _card;
	}
}

class PackHelper{
	private _deck:card[];
	GetCards(nos:number):card[]
	{
		for(let i=1;i<=nos;i++)
		{
			let _pack = new pack();
			let cards = _pack.Cards();
			for(let card in cards){
			this._deck.push( card);
		}

		}



	}
}

enum shape{
	Spade,
	Club,
	Diamond,
	Heart
}
enum color {
	Black,
	Red
}