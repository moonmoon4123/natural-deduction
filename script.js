let newCompound = document.querySelector('#new-compound');
let addCompoundBtn = document.querySelector('#add-compound-btn');
let compoundList = document.querySelector('#compound-list');

let newPrimary = document.querySelector('#new-primary')
let addPrimaryBtn = document.querySelector('#add-primary-btn')
let primaryList = document.querySelector('#primary-list')

let newSymbolic = document.querySelector('#new-symbolic')
let ns1 = document.querySelector('#ns1')
let ns2 = document.querySelector('#ns2')
let ns3 = document.querySelector('#ns3')
let ruleSelect = document.querySelector('#natual-deduction-rule')
let addSymbolicBtn = document.querySelector('#add-symbolic-btn')
let symbolicList = document.querySelector('#symbolic-list')


addCompoundBtn.addEventListener('click', function() {
    // Create a new compound item
    let li = document.createElement('li');
    li.textContent = newCompound.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        compoundList.removeChild(li);
    });
    li.appendChild(btn);
    // Append the new compound item to the list 
    compoundList.appendChild(li);
    newCompound.value = ''; // Clear the input field after adding
    newCompound.focus(); // Focus back on the input field 
});

addPrimaryBtn.addEventListener('click', function() {
// Create a new primary item
    let li = document.createElement('li');
    li.textContent = newPrimary.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        primaryList.removeChild(li);
    });

    li.appendChild(btn);
    // Append the new primary item to the list 
    primaryList.appendChild(li);

    newPrimary.value = ''; // Clear the input field after adding

    newPrimary.focus(); // Focus back on the input field 
});

addSymbolicBtn.addEventListener('click', function() {
// Create a new symbolic item
    let li = document.createElement('li');
    //li.textContent = newSymbolic.value;

// 기호명제 구성: 명제 내용 + [규칙] + (라인 번호들)
    let lineRefs = [ns1.value, ns2.value, ns3.value].filter(x => x.trim() !== '').join(', ');
    li.textContent = `${newSymbolic.value}   [${ruleSelect.value}] ${lineRefs ? '(' + lineRefs + ')' : ''}`;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        symbolicList.removeChild(li);
    });

    li.appendChild(btn);
    // Append the new symbolic item to the list 
    symbolicList.appendChild(li);

    newSymbolic.value = ''; // Clear the input field after adding
    ns1.value = '';
    ns2.value = '';
    ns3.value = '';
    ruleSelect.selectedIndex = 0;
    newSymbolic.focus(); // Focus back on the input field 
});

