function Task(){
	this.id;
	this.name;
	this.description;
	this.isDone = false;
}

Task.prototype = {
	
	create: function(name, description){
		this.name = name;
		this.description = description;
		return this;
	}

}