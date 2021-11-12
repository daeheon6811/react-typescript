function merge(a: any , b : any) : any {
    return {
        ...a ,
        ...b
    };
}

const merged = merge({foo: 1 }, {bar : 2});


// 제네릭 개선


function merge2<A,B>(a:A , b: B): A & B {
    return {
        ...a ,
        ...b 
    };
}

const merged2 = merge2({foo:1} , {bar:1});