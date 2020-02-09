
test('add todo list' , ()=> {
    let toDo = [{id: 0,description: 'task one',done: true},{id: 1,description: 'task two',done: false}];
    let toDo2 = JSON.parse(JSON.stringify(toDo));
    addToDo(toDo , {id: 3,description: 'something',done: true})
    expected(toDo2).toEqual(toDo);
})

test('deleteTodo', function () {
    let currentToDo = [{id:1, description: "task one", done:false},
    {id:2, description: "task two", done:false},{id:3, description: "task three", done:false}];
    let del1 = deleteTodo(currentToDo, 1);
    let del2 = deleteTodo(currentToDo, 2);
    let del3 = deleteTodo(currentToDo, 3);

    expect(del1).toEqual([{id:2, description: "task two", done:false},{id:3, description: "task three", done:false}]);
    expect(del2).toEqual([{id:1, description: "task one", done:false},{id:3, description: "task three", done:false}]);
    expect(del3).toEqual([{id:1, description: "task one", done:false},{id:2, description: "task two", done:false}]);

  });
  