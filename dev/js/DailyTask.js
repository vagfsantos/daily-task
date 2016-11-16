function DailyTask(){
	this.tasks = [];
	this.currentId = 0;
	this.storage = 'taskStorage';
}

DailyTask.prototype = {

	init: function(){
		var itens = this._get();
		if( itens ){
			JSON.parse(itens);
		};
		console.log(itens);
		return this;
	},

	_get: function(){
		return localStorage.getItem(this.storage);
	},
	
	add: function(task){
		task.id = this.currentId;		
		this.tasks.push(task);
		this.currentId++;
		this.save(task);
		return this;
	},

	save: function(task){
		window.localStorage.setItem( this.storage, JSON.stringify(task) );
		return this;
	},

	closeTask: function(task){
		task.isDone = true;
		return this;
	},

	delete: function(task){

	}

}