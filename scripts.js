function Guzik(text) {
	this.text = text || "Gitara siema"
}

Guzik.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
    	});
    	$('body').append(this.$element)
	}};
var btn1 = new Guzik("Gitara siema");
btn1.create();