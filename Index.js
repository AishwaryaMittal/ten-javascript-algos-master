

function clearNames() {
        var rootDiv = document.getElementById('listContainer');
        if (rootDiv) {
            while (rootDiv.hasChildNodes()) {
                rootDiv.removeChild(rootDiv.lastChild);
            }
        }
    }

    function initDocument() {
        clearNames();
        initUsersNames();
        initMessages();
        initConstantTimeNameFileter();
    }

    function initUsersNames() {
        var rootDiv = document.createElement('div');
        rootDiv.id = 'listContainer';
        var userNamesContainer = document.createElement('div');
        userNames.forEach( function(userName, index) {
            var childDiv = document.createElement('div');
            var text = document.createTextNode(index.toString().concat(' .) ').concat(`${userName.firstName} ${userName.lastName}`));
            childDiv.appendChild(text);
            userNamesContainer.appendChild(childDiv);
        });
        rootDiv.appendChild(userNamesContainer);
        document.body.appendChild(rootDiv);
    }

    function initMessages() {
        var rootDiv = document.createElement('div');
        var messagesContainer = document.createElement('div');
        messagesContainer.id = 'messagesContainer';
        messagesContainer.style['float'] = 'left';
        document.body.appendChild(messagesContainer);
    }

    function clearMessages() {
    	console.log('here', document.getElementById('messagesContainer'));
        document.getElementById('messagesContainer').innerHTML='';
    
        /*TODO CLEAR MESSAGES FROM DOCUMENT WHEN USER CLICKS THE [CLEAR MESSAGES] BUTTON */
        /* EXTRA CREDIT INCLUDE A SCRIPT TAG THATS FETCHES BOOTSTRAP CSS STLYINGS AND STYLE THE BUTTONS */
    }

    function addPlainMessage() {
        const userText = getUserText();
        var messagesContainer = document.getElementById('messagesContainer');
        var messageDiv = document.createElement('p');
        const text = document.createTextNode(userText);
        messageDiv.appendChild(text);
        messagesContainer.appendChild(messageDiv);
        clearUserInput();
    }

    function addHandleMessage(handle) {
        // EXAMPLE: @chandler => @CGegg
        var messagesContainer = document.getElementById('messagesContainer');
        var messageDiv = document.createElement('p');
        var handleSpan = document.createElement('span');
        handleSpan.style['color'] = 'dodgerblue';
        handleText = document.createTextNode(handle);
        handleSpan.appendChild(handleText);

        var user = _.find(userNames, { handle: handle});
        console.log(user);
        // TODO:: EXCLUDING THE ORIGINALLY TYPED USER NAME REPLACE THIS TEXT \
        //        WITH ANY ADDITIONAL USER TEXT FROM THE ORIGIN USER TEXT MESSAGE
        var dummyText = '@' + user.firstName + ' => ';
        var messageText = document.createTextNode(`${dummyText} `);
        messageDiv.appendChild(messageText);
        messageDiv.appendChild(handleSpan);
        messagesContainer.appendChild(messageDiv);

        clearFilteredNames();
        clearUserInput();
    }
    
    //TODO SET THE FLAG TO FALS ONCE YOU UNDERSTAND THE ASSIGNMENT
    const instructionsFlag = false;
    if (instructionsFlag) {
        console.log(`README`);
        console.log(`
            SETUP ->
            1. INSTALL LODASH USING NPM AND SAVE THE DEPENDENCY TO YOUR PACKAGE.JSON FILE
    
            2. IMPORT LODASH INTO THE INDEX.JS FILE.
    
            3. COMPLETE ALL TODOS
        `);
    }
    

    /* TODO ADD ADDITONALY 
       OBJECTS LIKE THE ONES BELOW, MINIMUM OF TEN.  
       EACH MUST CONTAIN A FIRST AND LAST NAME AND HANDLE */
    const userNames = [
        {
            firstName: 'Chandler',
            lastName: 'Gegg',
            handle: '@CGegg'
        },
        {
            firstName: 'Phil',
            lastName: 'Mickelson',
            handle: '@PMickelson'
        },
        {
            firstName: 'Grace',
            lastName: 'Hopper',
            handle: '@GHopper'
        },
        {
            firstName: 'Horace',
            lastName: 'Grant',
            handle: '@HGrant'
        },
        {
            firstName: 'Aishwarya',
            lastName: 'Mittal',
            handle: '@AMittal'
        },
        {
            firstName: 'Elena',
            lastName: 'Gilbert',
            handle: '@EGilbert'
        },
        {
            firstName: 'Damon',
            lastName: 'Salvatore',
            handle: '@DSalvatore'
        },
        {
            firstName: 'Stefan',
            lastName: 'Salvatore',
            handle: '@SSalvatore'
        },
        {
            firstName: 'Eric',
            lastName: 'Smith',
            handle: '@ESmith'
        },
        {
            firstName: 'Nick',
            lastName: 'Klaus',
            handle: '@NKlaus'
        },
        {
            firstName: 'Elijah',
            lastName: 'Mikaelson',
            handle: '@EMikaelson'
        },
        {
            firstName: 'Jack',
            lastName: 'Daniel',
            handle: '@JDaniel'
        },
        {
            firstName: 'John',
            lastName: 'Disouza',
            handle: '@JDisouza'
        },
        {
            firstName: 'Jane',
            lastName: 'Rodgers',
            handle: '@JRodgers'
        }
    ];

    const userMessages = [];

    const debounce = (func, delay) => {
        let inDebounce
        return function() {
            const context = this
            const args = arguments
            clearTimeout(inDebounce)
            inDebounce = setTimeout(() => func.apply(context, args), delay)
        }
    }

    var lastNameMap = {};

    var firstNameMap = {};

    function initConstantTimeNameFileter() {


        
        userNames.forEach((user) => {
        firstNameMap['@' + user.firstName.toLowerCase()] = user;
        });



        
        userNames.forEach((user) => {
        lastNameMap['@' + user.lastName.toLowerCase()] = user;
        });

        /* EXTRA CREDIT */
    }
    function constantTimeNameFilter(userText) {
        /* EXTRA CREDIT :: CONVERT filterNames FUNCTION TO DO CONSTANT TIME LOOK UP.  
        THIS WILL REQUIRE initConstantTimeNameFileter ON PAGE LOAD AS WELL */

        const filteredNames = [];

        console.log("in constantTimeNameFilter");

        if (firstNameMap[userText.toLowerCase()]) {
            filteredNames.push(firstNameMap[userText.toLowerCase()]);
        } else if (lastNameMap[userText.toLowerCase()]) {
            filteredNames.push(lastNameMap[userText.toLowerCase()]);
        }
  
        return filteredNames;


    }

    // @gra v
    function filterNames(userText) {




        
        const firstThreeChars = userText.toLowerCase().slice(1,4);
        var re = new RegExp(firstThreeChars, 'g');
        console.log(`First three characters: ${firstThreeChars} `);
        console.log(`First three characters: ${firstThreeChars} `);
        const filteredNames = [];
        userNames.forEach( (userName) => {
            const fullname = `${userName.firstName.toLowerCase()} ${userName.lastName.toLowerCase()}`;
            var isMatch = !!userName.firstName.toLowerCase().match(re) || !!userName.lastName.toLowerCase().match(re);
            console.log(`Fullname: ${fullname}` );
            console.log(isMatch);
            console.log(`Fullname: ${fullname}` );
            if (isMatch) {
                filteredNames.push(userName);
            }
        });
        return filteredNames;
        
    }

    function initFilteredNames(filteredNames) {
        clearNames();
        var rootDiv = document.createElement('div');
        rootDiv.id = 'filteredNamesContainer';
        var namesContainer = document.createElement('div');
        filteredNames.forEach( (name) => {
            var nameElm = document.createElement('button');
            nameElm.style['background-color'] = 'dodgerblue';
            nameElm.style['cursor'] = 'pointer';
            nameElm.setAttribute('class', 'filtered-name');
            nameElm.setAttribute('handle', name.handle);
            var text = document.createTextNode(`${name.firstName} ${name.lastName}`);
            nameElm.appendChild(text);
            namesContainer.appendChild(nameElm);

            nameElm.addEventListener("click", function(ev){
                var handle = ev.srcElement.attributes[1].value;
                addHandleMessage(handle); 
            });

            
            /* 
                TODO :: ADD CLICK EVENT LISTENER [addEventListener] TO EACH NAME ELEMENT.
                IF THE USER CLICKS ON A FILTERED NAME THEN THEN A MESSAGE IS OUTPUT
                USING THE ADD MESSAGE FUNCTION THAT REPLACES THE USER name WITH THE USER HANDLE.
                THE addHandleMessage FUNCTION SHOULD BE INVOKED FROM INSIDE THE CALLBACK OF THE EVENT LISTENER.

                TIPS:
                    BRUTE FORCE :: ASIGN A UNIQUE ID TO EACH NAME ELEMENT, GRAB ID FROM THE EVENT AND
                                   PASS IT AS AN ARGUMENT TO ADD MESSAGE FUNCTION THEN SEARCH USER NAMES ARRAY
                    
                    DATA ATTRIBUTE :: ASSIGN A DATA ATTRIBUTE CALLED [handle] TO EACH THE NAME ELEMENT
                                      GRAB DATA ATTRIBUTE FROM THE EVENT AND PASS IT AS AN ARGUMENT TO 
                                      ADD MESSAGE FUNCTION THEN SEARCH USER NAMES ARRAY

                EXAMPLE: @chandler => @CGegg
            */

            //TODO WRAP THIS FUNCTION WITH EVENT LISTENER AND UNCOMMENT IT
            //TODO REPLACE [myHandle] WITH THE USERS CORRECT HANDLE
            // addHandleMessage('myHandle'); 

        });
        document.body.appendChild(namesContainer);
    }

    function clearUserInput() {
        document.getElementById('inputText').value = '';
    }

    function clearFilteredNames() {
        const filteredNames = document.getElementsByClassName('filtered-name');
        Array.from(filteredNames).forEach( (filteredName) => {
            filteredName.remove();
        });        
        
    }

    function getUserText() {
        return document.getElementById('inputText').value.trim();
    }

    function searchNames() {
        const userText = getUserText();
        console.log('Search names ...');
        console.log(userText);
        console.log('Search names ...');

        const firstChar = userText[0] || '';
        if (firstChar === '@') {
            console.log('filter names ...');
            //const filteredNames = filterNames(userText);
            const filteredNames =constantTimeNameFilter(userText);
            initFilteredNames(filteredNames);
        } else {
            console.log('MISSING @ IN USER TEXT');
        }
    }
    // TODO UPDATE THE DEBOUNCE DELAY TO MORE CLOSELY RESEMBLE USER TYPING
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById('inputText').addEventListener(
            'input',
            debounce(
                searchNames,
                1000
            )
        );
        initDocument();
    });
    