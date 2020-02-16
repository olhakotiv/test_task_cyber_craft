Simple calc.(HTML/CSS/JS)

Tools requirements:
JS, HTML5, CSS or any pre-processor, Git.

It will be a plus: useful README, good comments and responsive design.

1. As a User, when I click button `Open calc`, I want see dialog modal with Simple calc
inside.
2. As a User, I want to have the ability to sum or multiply sequence of numbers and see a
result for each row from the sketch presented below, because it helps me to count my
savings.
3. As a User, I want to mark a row background using a checkbox form.

It is not pixel perfect.
Different UI libraries like Bootstrap are available.

(14.02.2020)
What I did:

1. The button 'Open calc' is working fine.
2. You can see a result when you'll click a button 'Press Result'. With this task, I had little problems such as I couldn't do automatically reloading input values and the inputs don't get cleaned with reloading page. I wanted to do calculations interactive, but I got lost somewhere on StackOverflow, searching how to do what I want ).
3. Checkboxes are working fine too. If you'll press it, the background color will change.

P.S. Unfortunately, the page doesn't have a responsive design. I want to finish this task today after some sleeping because I did it all night and my brain is refusing to work. I see, that my knowledge isn't so wide yet, but I know how to work hard for this goal.
And also sorry for mistakes in code and this text.

(15.02.2020)
P.P.S
I solved the next problems:
1. I upgraded summing and multiplying functions. Now, when some input is empty, the function ignores this input.
2. When you reload the page, all inputs get cleaned.
3. When the sum or multiply button is pressed, the result is automatically updated.
4. When you press enter, the Calc is opening.
Also, I changed the code structure. I thought that using modules will be better.
And of course, I'll change the CSS file because now the styles are awful )
You can see the previous version if you'll check the commit, that I've pushed on Friday.
