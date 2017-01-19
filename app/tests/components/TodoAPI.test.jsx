var expect = require('expect');

var TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })
  it('should exist', () =>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid array', () => {
      var todos = 'not an array';
      TodoAPI.setTodos(todos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });



  describe('getTodos', () =>{
    it('should return empty array', () => {
      var todos = TodoAPI.getTodos();
      expect(todos).toEqual([]);
    });

    it('should get a valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(todos).toEqual(actualTodos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: "some Text",
      completed: true
    }, {
      id: 2,
      text: "Other some here",
      completed: false
    }, {
      id: 3,
      text: "Other text here",
       completed: true
    }];

    it('should return all items if showCompleted is true', () =>{
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toEqual(3);
    });

    it('should return only non completed items if showCompleted is false', () =>{
        var filteredTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filteredTodos.length).toEqual(1);
    });

    it('should sort by completed status', () =>{
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () =>{
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
        expect(filteredTodos.length).toEqual(2);
    });

    it('should return all todos if searchText is empty', () =>{
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toEqual(3);
    });


  })
});
