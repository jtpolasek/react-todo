var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () =>{
  describe('searchTextReducer', () =>{
    it('should set searchText', () =>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

    describe('showCompletedReducer', () =>{
      it('should toggle completed', () =>{
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = reducers.showCompletedReducer(df(false),df(action));
        expect(res).toEqual(true);
      });
    });

    describe('todosReducer', () =>{
      it('should add new todo', () =>{
        var action = {
          type: 'ADD_TODO',
          text: 'Walk the dog'
        };
        var res = reducers.todosReducer(df([]),df(action));
        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text);
      });
    });

      describe('Toggle completed todo', () =>{
        it('should toggle the  todo', () =>{
          var todo = [
            {
              id: 1,
              text: 'test todo',
              completed: false,
              createdAt: 123,
              completedAt: undefined
            }
          ]
          var action = {
            type: 'TOGGLE_TODO',
            id: 1
          };
          var res = reducers.todosReducer(df(todo),df(action));
          expect(res[0].id).toEqual(1);
          expect(res[0].completed).toEqual(true);
          expect(res[0].createdAt).toEqual(123);
          expect(res[0].completedAt).toNotEqual(undefined);
        });

        it('should add existing todos', () =>{
          var todos = [{
            id: '111',
            text: "anything",
            completed: false,
            completedAt: 33000
          }];
          var action = {
            type: 'ADD_TODOS',
            todos
          };
          var res = reducers.todosReducer(df([]), df(action));

          expect(res.length).toEqual(1);
          expect(res[0]).toEqual(todos[0]);
        });
      });
});
