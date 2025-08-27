## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById - It means it select specefically one element  by its id.Id must be Unique in HTML.So it's easy to select.

- getElementsByClassName - it selects all elements with a certain class.It behave like array.If someone wants to use it for single element then first give it a for...of loop and select single element.

- querySelector / querySelectorAll - It selects elements using CSS selectors.querySelector select the first matches element.And querySelectorAll select all matching nodelist.

## 2.How do you create and insert a new element into the DOM?

- The method is-
- document.createElement(tagName)
- and then insert by appendChild.Also can add innerText or value.

- for example : 

const div = document.createElement('div'); 

document.body.appendChild(div);

# 3.What is Event Bubbling and how does it work?

- when an event starts from the targeted element and then propagates upward through it's parent elements in the DOM tree - all the up to document and window calls Event Bubling.it works step-by-step.

- Event goes from child → parent → document → window

# 4.What is Event Delegation in JavaScript? Why is it useful?

- Its a pattern where attach one listener to their parent and use event bubbling to handle events for all children.many It can keep logic in one place.it saves memory by reducing the number of event listeners.

# 5.What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() - Prevents the default browser behavior for an event.It stops the browser’s built-in action.

- stopPropagation() - Stops the event from bubbling further in the DOM tree.It does not affect default browser behavior.


