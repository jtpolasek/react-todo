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
});