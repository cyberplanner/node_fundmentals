module.exports = function(name, desc) {
  var name = name,
  description = desc;
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