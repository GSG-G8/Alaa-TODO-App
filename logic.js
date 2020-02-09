
var todoFunctions = {
 
    generateId: (function() {
      var idCounter = 0;
  
      function incrementCounter() {
        return (idCounter += 1);
      }
  
      return incrementCounter;
    })(),
    
    cloneArrayOfObjects: function(todos) {
      return todos.map(function(todo){
        return JSON.parse(JSON.stringify(todo));
      });
    },
    
    addTodo: function(todos, newTodo) {
      return todoFunctions.cloneArrayOfObjects(todos).concat(newTodo) 
    },
    deleteTodo: function(todos, idToDelete) {
      let deleteArray = todos.filter(todo => todo.id!==idToDelete);
       return deleteArray;
    },
    markTodo: function(todos, idToMark) {
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // in the new todo array, all elements will remain unchanged except the one with id: idToMark
      // this element will have its done value toggled
      // hint: array.map
      



    },
    
  };
  
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }
  