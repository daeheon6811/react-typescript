interface Items<T> {
    list: T[];
  }
  
  const items: Items<string> = {
    list: ['a', 'b', 'c']
  };

  type Items2<T> = {
    list: T[];
  };
  
  const items2: Items2<string> = {
    list: ['a', 'b', 'c']
  };