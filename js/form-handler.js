function addRow(){
    const id = document.getElementById("id").value;
    const fio = document.getElementById("fio").value;
    const numRecordBook = document.getElementById("numRecordBook").value;
    const numOfGroup = document.getElementById("numOfGroup").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const age = document.getElementById("age").value;
    const formOfAdmission = document.querySelector('input[name="formOfAdmission"]:checked')?.value;
    const direction = document.getElementById("direction").value;

    if(!id||!fio||!numRecordBook||!numOfGroup||!gender||!age||!formOfAdmission||!direction){
        alert("Заполните все поля формы.");
        return;
    }

    const table = document.getElementById("table");
    const newRow = table.insertRow();

    const elements = [id,fio,numRecordBook,numOfGroup,gender,age,formOfAdmission,direction];
    elements.forEach(element=>{
        
        newRow.insertCell().textContent = element;
    });
    document.getElementById("student").reset();
    alert("Студент успешно добавлен в таблицу!");
}