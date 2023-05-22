class exam{
    constructor(name,sub1,sub2,sub3,sub4){
        this.name = name;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
        this.sub4 = sub4;
    }
}
class UI{
    output(Exam){
        let rows = `<tr> <td>${Exam.name}</td> <td>${Exam.sub1}</td> <td>${Exam.sub2}</td> <td>${Exam.sub3}</td>
            <td>${Exam.sub4}</td> <td>${this.total()}</td> <td>${this.avg()+"%"}</td> <td>${this.grade()}</td> </tr>`;

            document.querySelector('.table').innerHTML+=rows;
           
    }
    avg(){
       return this.total()/4;
    }
    total(){
        return parseInt(sub1.value)+parseInt(sub2.value)+parseInt(sub3.value)+parseInt(sub4.value);
    }
    grade(){
        if(this.avg() >=  100 || this.avg() <= 95)
            return "A+";
        
        else if(this.avg() >= 94 || this.avg() <= 90)
           return "A";
        
        else if(this.avg() >= 89 || this.avg() <= 85)
           return "B+";
        
        else if(this.avg() >= 84 || this.avg() <= 80)
           return "B";
        
        else if(this.avg() >= 79 || this.avg() <= 75)
           return "C+";
        
        else if(this.avg() >= 74 || this.avg() <= 70)
           return "C";
        
        else if(this.avg() >= 69 || this.avg() <= 65)
           return "D+";
        
        else if(this.avg() >= 64 || this.avg() <= 60)
           return "D";
        
        else
            return "feiled!";
        
    }
    clear(){
        names.value='';
        sub1.value='';
        sub2.value='';
        sub3.value='';
        sub4.value='';
    }

}
class store{
    
}
let ui = new UI;
let names=document.querySelector('#name'),
sub1=document.querySelector('#sub1'),
sub2=document.querySelector('#sub2'),
sub3=document.querySelector('#sub3'),
sub4=document.querySelector('#sub4'),
btn=document.querySelector('.btn');
btn.addEventListener('click',function(e){
    e.preventDefault();
    if(names.value.length == 0){
        alert('place fill in the input')
    }
    else{
    let Exam = new exam(names.value,sub1.value,sub2.value,sub3.value,sub4.value);
    ui.output(Exam);
    ui.clear();
    console.log(11+parseInt(sub1.value))
    }
})
