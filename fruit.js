var name = "Apple",
  description = "Fruit from the apple tree";
  
module.exports = function() {
  var functions = {
    setName: function(name) {
      this.name = name;
    },
    setDescription: function(desc) {
      this.description = desc;
    },
    getInfo: function() {
      return {
        name: name,
        description: description
      };
    }
  };
  return functions;
}