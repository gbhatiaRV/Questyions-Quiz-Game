/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
(function() {

    function question(question,answer,correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    var Q1 = new question('what is your profession?',['Doctor','Teacher',['Engineer']],2);
    var Q2 = new question('Did you had your dinner?',['Yes','No'],1);
    var Q3 = new question('Do you like ice cream?',['Yes','No'],0);
    var Q4 = new question('Do you like to code?',['Yes','No'],0)
    
    question.prototype.display = function(){
    console.log(this.question);
    for (i=0;i<this.answer.length;i++)
    {
        console.log(i+": "+this.answer[i]);
    }
    
    }
    
    var allQues = [Q1,Q2,Q3,Q4];
    
    function DisplayQues()
    {
        //console.log(allQues.length);
        var currDisp = Math.floor(Math.random() * allQues.length);
        allQues[currDisp].display();
        var userResp = enterAnswer(allQues[currDisp]);
        if (userResp != 'Exit')
        {
            console.log(userResp);
            DisplayQues();
        }
    
    }
    
    function enterAnswer(question)
    {
        var userAns = prompt('Enter you response?');
        var Resp;
        if (userAns != 'Exit')
    {
    
        Resp = (userAns == question.correct) ? 'Correct Answer!':'Try Again!';
    }
        else
        {
            Resp = 'Exit';
        }
        return Resp;
    }
    
    
    DisplayQues();

})();




