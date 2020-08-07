SuperMath.prototype.toDo = function(obj) {
    if (obj.znak == '-') {
        var des = obj.X - obj.Y;
    }
    else if (obj.znak == '+') {
        var des = obj.X + obj.Y;
    }
    else if (obj.znak == '*') {
        var des = obj.X * obj.Y;
    }
    else if (obj.znak == '/') {
        var des = obj.X / obj.Y;
    }
    else if (obj.znak == '%') {
        var des = obj.X % obj.Y;
    }
    else if (obj.znak == '+') {
        var des = obj.X + obj.Y;
    };
    console.log(des);        
}
SuperMath.prototype.input = function () {
    obj.X = prompt('X?');
    obj.Y = prompt('Y?');
    obj.znak = prompt ('Znak?');
    if (obj.znak !== '+' || '-' || '/' || '*' || '%') {
        alert('Error')
    };
    p.toDo(obj);
}
function SuperMath() {
    this.check = function(obj) {  
        var doit = prompt('Znak?');
        if (doit == 'yes') {
            p.toDo(obj);            
        }   
        else {
            p.input()
        }
    }    
}
obj = { 
    X:12, 
    Y:3, 
    znak: '/'
}
var p = new SuperMath ();
p.check(obj); 
