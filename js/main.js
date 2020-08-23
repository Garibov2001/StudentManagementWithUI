class Student
{
    constructor(argID, argName, argLastName, argEmail,argTel)
    {
        this.studentID = argID
        this.studentName = argName
        this.studentLastName = argLastName
        this.studentEmail = argEmail
        this.studentTel = argTel
    }
}


var studentArr = []



//Students table
studentsTable = document.querySelector("#studentTable tbody");


//Gonderilen datalarla yeni sutun yaradir
function AddRecordToTable(ID, firstName, lastName, email, telep)
{            
    var newRow = studentsTable.insertRow()

    newRow.insertCell().innerHTML = ID
    newRow.insertCell().innerHTML = firstName
    newRow.insertCell().innerHTML = lastName
    newRow.insertCell().innerHTML = email
    newRow.insertCell().innerHTML = telep
}

//Gonderilen yeni datalari kohne datalarla evezleyir
function UpdateRecordInTable(ID, firstName, lastName, email, telep)
{          
    for (var i=0; i < studentsTable.rows.length; i++)
    {
        if(studentsTable.rows[i].cells[0].innerHTML == ID)
        {
            studentsTable.rows[i].cells[1].innerHTML = firstName;
            studentsTable.rows[i].cells[2].innerHTML = lastName;
            studentsTable.rows[i].cells[3].innerHTML = email;
            studentsTable.rows[i].cells[4].innerHTML = telep;
            return;
        }            
    }
}

//Gonderilen ID nin oldugu setiri silir
function RemoveRecordFromTable(ID)
{            
    for (var i=0; i < studentsTable.rows.length; i++)
    {
        if(studentsTable.rows[i].cells[0].innerHTML == ID)
        {
            studentsTable.deleteRow(i); 
            return;           
        }            
    }
}

//Gonderilen string herflerden teskil olub ya yox:
function isAlpha(argString)
{
    for (var i = 0; i < argString.length; i++)   
    {   
        if(argString[i].toLowerCase() == argString[i] && 
           argString[i].toUpperCase() == argString[i])
        {
            return false
        }        
    }
    return true
}

//Gonderilen stringin yalniz ilk ilk herifi boyukdurmu
function isCapitalized(argString)
{
    if(argString[0].toLowerCase() != argString[0] && 
       argString[0].toUpperCase() == argString[0])
    {
        for (var i = 1; i < argString.length ; i++)
        {
            if(argString[i].toLowerCase() == argString[i] && 
               argString[i].toUpperCase() != argString[i])
            {
                continue;
            }
            else
            {
                return false
            }
        }
        return true  
    } 
    else
    {
        return false
    }
}

//Gonderilen stringin bosdurmu
function isEmpty(argString)
{
    if(argString.length == 0)
    {
        return true
    }
    else
    {
        return false
    }
    
}





//=============================================================================
//======================== TELEBE ELAVE ETME ===================================
//=============================================================================

studentAddModal = document.querySelector("#student-add-modal");
studentID = document.querySelector("#stundetID");
studentName = document.querySelector("#studentName");
studentLastName = document.querySelector("#studentLastName");
studentMail = document.querySelector("#studentMail");
studentTel = document.querySelector("#studentTelephone");

studentTable = document.querySelector("#studentTable");



//Daxil edilen ID standartlara uyurmu
function isValidID(argID)
{
    if(!isEmpty(argID))
    {
        if(isLength(argID))
        {
            if(isDigit(argID))
            {
                if(!isExist(argID))
                {
                    return true
                }
                else
                {
                    window.alert("Bu telebe ID si artiq movcuddur")
                    return false
                }
            }
            else
            {
                window.alert("Telebe ID si yalniz reqemlerden teskil oluna biler")
                return false
            }
        }
        else
        {
            window.alert("Telebe ID si 3 elementden ibaret olmalidir")
            return false
        }
    }
    else
    {
        window.alert("Telebe ID si doldurulmalidir")
        return false   
    }

    //3 elementden teskil olunubmu
    function isLength(argString)
    {
        if(argString.length == 3)
        {
            return true
        }
        else
        {
            return false
        }

    }

    //3 elementin hamisi reqemdirmi
    function isDigit(argString)
    {
        for (var i=0; i<argString.length; i++)
        {
            if(argString[i].charCodeAt(0) >= 48 &&
            argString[i].charCodeAt(0) <= 57 )
            {
                continue;
            }
            else
            {
                return false
            }
        }
        return true    
    }

    //bu IDden artiq bazada varmi
    function isExist(argString)
    {
        for (var i=0; i<studentArr.length; i++)
        {
            if(argString == studentArr[i].studentID)
            {
                return true
            }
        }
        return false
    }
}

//Daxil edilen ad standartlara uyurmu
function isValidName(argStudentName)
{
    if(!isEmpty(argStudentName))
    {
        if(isAlpha(argStudentName))
        {
            if(isCapitalized(argStudentName))
            {
                return true
            }
            else
            {
                window.alert("Adin yalniz birinci herfi boyuk olmalidir")
                return false
            }
        }
        else
        {
            window.alert("Ad yalniz herflerden teskil oluna biler")
            return false
        }        
    }
    else
    {
        window.alert("Ad hissesini doldurun")
        return false
    }
}

//Daxil edilen soyad standartlara uyurmu
function isValidLastName(argStudentLastName)
{
    if(!isEmpty(argStudentLastName))
    {
        if(isAlpha(argStudentLastName))
        {
            if(isCapitalized(argStudentLastName))
            {
                return true
            }
            else
            {
                window.alert("Soyadin yalniz birinci herfi boyuk olmalidir")
                return false
            }
        }
        else
        {
            window.alert("Soyad yalniz herflerden teskil oluna biler")
            return false
        }
    }
    else
    {
        window.alert("Soyad hissesi doldurulmalidir")
        return false
    }
}

//Daxil edilen e-mail standartlara uyurmu   (Yeniden gozden kecir)
function isValidEmail(argStudentMail)
{
    if(!isEmpty(argStudentMail))
    {
        if(AtExist(argStudentMail))
        {
            return true
        }
        else
        {
            window.alert("Emailde @ olmalidir")
            return false
        }
    }
    else
    {
        window.alert("Email hissesi doldurulmalidir")
        return false
    }


    function AtExist(argStudentMail)
    {
        for (var i=0; i<argStudentMail.length; i++)
        {
            if(argStudentMail[i]=="@")
            {
                return true                
            }
        } 
        return false    
    }
}

//Daxil edilen telefon standartlara uyurmu   
function isValidTelephone(argStudentTel)
{
    if(!isEmpty(argStudentTel))
    {
        if(argStudentTel.length == 13)
        {
            if(TelPrefix(argStudentTel))
            {
                if(isDigit(argStudentTel))
                {
                    return true
                }
                else
                {
                    window.alert("Nomrenizde (+994 basqa) butun elementler reqemler olmalidir ")
                    return false
                }
            }
            else
            {
                window.alert("Nomreniz +994 ile baslamalidir")
                return false
            }
        }
        else
        {
            window.alert("Nomre +994 de daxil olmaqla, umumilikde 14 elementden teskil olunmalidir")
            return false
        }        
    }
    else
    {
        window.alert("Telefon hissesi doldurulmalidir")
        return false
    }

    function TelPrefix(argStudentTel)
    {
        if(argStudentTel[0] != "+")
            return false
        if(argStudentTel[1] != "9")
            return false
        if(argStudentTel[2] != "9")
            return false
        if(argStudentTel[3] != "4")
            return false
        return true
    }

    function isDigit(argStudentTel)
    {
        for (var i=4; i<argStudentTel.length; i++)
        {
            if(argStudentTel[i].charCodeAt(0) >= 48 &&
               argStudentTel[i].charCodeAt(0) <= 57 )
            {

            }
            else
            {
                return false
            }
        }
        return true
    }
   
}

function AddStudent() 
{
    var isID = isValidID(studentID.value)
    var isName = isValidName(studentName.value)   
    var isLastName = isValidLastName(studentLastName.value)
    var isEmail = isValidEmail(studentMail.value)
    var isTelep = isValidTelephone(studentTel.value)


    if(isName && isLastName && isEmail && isTelep && isID)
    { 
            
        studentArr.push(new Student(
            studentID.value, 
            studentName.value, 
            studentLastName.value, 
            studentMail.value, 
            studentTel.value))

        AddRecordToTable(
            studentID.value,
            studentName.value,
            studentLastName.value,
            studentMail.value,
            studentTel.value )

        window.alert("Telebe sisteme elave olundu");
        CleanForm();

        $("#student-add-modal").modal("hide");
    }

    function CleanForm()
    {
        studentID.value = "";
        studentName.value = "";
        studentLastName.value = "";
        studentMail.value = "";
        studentTel.value = "";
    }

}



//=========================================================================
//=================== TƏLƏBƏNİN MƏLUMATLARINI DƏYİŞ =======================
//=========================================================================

updateStudentID = document.querySelector("#updateStudentID");
updateSearchButton = document.querySelector("#updateSearchButton");
newStudentName = document.querySelector("#newStudentName");
newStudentLastName = document.querySelector("#newStudentLastName");
newStudentMail = document.querySelector("#newStudentMail");
newStudentTelephone = document.querySelector("#newStudentTelephone");


//axtaris bolumunde yazilan ID kriteriyalari oduyurmu
function isSearchUpdateValidID(argID)
{
    if(!isEmpty(argID))
    {
        if(isLength(argID))
        {
            if(isDigit(argID))
            {
                if(isExist(argID))
                {
                    return true
                }
                else
                {
                    window.alert("Daxil etdiyiniz ID bazada yoxdur")
                    return false
                }
            }
            else
            {
                
                window.alert("Bazamizda olan IDler yalniz reqemlerden teskil olunub")
                return false
            }
        }
        else
        {
            window.alert("Qeyd : Bazamizda olan IDler yalniz 3 elementden teskil olunub")
            return false
        }
    }
    else
    {
        window.alert("Axtaris xanasini doldurun")
        return false   
    }


    function isLength(argString)
    {
        if(argString.length == 3)
        {
            return true
        }
        else
        {
            return false
        }

    }

    function isDigit(argString)
    {
        for (var i=0; i<argString.length; i++)
        {
            if(argString[i].charCodeAt(0) >= 48 &&
            argString[i].charCodeAt(0) <= 57 )
            {

            }
            else
            {
                return false
            }
        }
        return true   
    }

    function isExist(argString)
    {
        for (var i=0; i<studentArr.length; i++)
        {
            if(argString == studentArr[i].studentID)
            {
                return true
            }
        }
        return false

    }
}

function SearchForUpdate()
{
    if(isSearchUpdateValidID(updateStudentID.value))
    {
        EnableInputs()
        for (var i=0; i<studentArr.length; i++)
        {
            if(studentArr[i].studentID == updateStudentID.value)
            {
                newStudentName.value = studentArr[i].studentName 
                newStudentLastName.value = studentArr[i].studentLastName 
                newStudentMail.value = studentArr[i].studentEmail 
                newStudentTelephone.value = studentArr[i].studentTel 
            }
        }
    }

    function EnableInputs()
    {
        updateStudentID.disabled = true
        newStudentName.disabled = false
        newStudentLastName.disabled = false
        newStudentMail.disabled = false
        newStudentTelephone.disabled = false
    }
}

function SaveEditChanges()
{
    var isName = isValidName(newStudentName.value)   
    var isLastName = isValidLastName(newStudentLastName.value)
    var isEmail = isValidEmail(newStudentMail.value)
    var isTelep = isValidTelephone(newStudentTelephone.value)

    if(isName && isLastName && isEmail && isTelep)
    {
        
        for (var i=0; i<studentArr.length; i++)
        {
            if(studentArr[i].studentID == updateStudentID.value)
            {
                studentArr[i].studentName = newStudentName.value 
                studentArr[i].studentLastName = newStudentLastName.value
                studentArr[i].studentEmail = newStudentMail.value 
                studentArr[i].studentTel  = newStudentTelephone.value 

                UpdateRecordInTable( 
                    updateStudentID.value, 
                    newStudentName.value,
                    newStudentLastName.value, 
                    newStudentMail.value,
                    newStudentTelephone.value); 

                window.alert("Deyisiklik tamamdir");

                $("#student-edit-modal").modal("hide");
            }
        }
        
    }

}





//=========================================================================
//==========================  TƏLƏBƏNİ SIL  ===============================
//=========================================================================


deleteStudentID = document.querySelector("#deleteStudentID");
removeSearchButton = document.querySelector("#removeSearchButton");
removeStudentName = document.querySelector("#removeStudentName");
removeStudentLastName = document.querySelector("#removeStudentLastName");
removeStudentMail = document.querySelector("#removeStudentMail");
removeStudentTelephone = document.querySelector("#removeStudentTelephone");


function SearchToRemove()
{
    if(isSearchUpdateValidID(deleteStudentID.value))
    {
        for (var i=0; i<studentArr.length; i++)
        {
            if(studentArr[i].studentID == deleteStudentID.value)
            {
                removeStudentName.value = studentArr[i].studentName 
                removeStudentLastName.value = studentArr[i].studentLastName 
                removeStudentMail.value = studentArr[i].studentEmail 
                removeStudentTelephone.value = studentArr[i].studentTel 
            }
        }
    } 
}

function RemoveStudentRecord()
{
    for (var i=0; i<studentArr.length; i++)
    {
        if(studentArr[i].studentID == deleteStudentID.value)
        {
            studentArr.splice(i,1);
            window.alert("Telebe melumati silindi");
            RemoveRecordFromTable(deleteStudentID.value);
            CleanForm();

            $("#student-delete-modal").modal("hide");
        }
    }

    //Proses bitdikden sonra inputlari temizlesin
    function CleanForm()
    {
        deleteStudentID.value = "";
        removeStudentName.value = "";
        removeStudentLastName.value = "";
        removeStudentMail.value = "";
        removeStudentTelephone.value = "";
    }
    
}






//=========================================================================
//======================== TELEBEYE BAX ===================================
//=========================================================================


searchType = document.querySelector("#searchType");
studentSearch = document.querySelector("#studentSearch");
searchButton = document.querySelector("#searchButton");


//Ad ve ya ID secildikde axtaris bolumu aktov olunsun
function OnChangeOption()
{
    if(searchType.value == "name") 
    {
        studentSearch.disabled = false;
    }
    else
    {
        if(searchType.value == "ID") 
        {
            studentSearch.disabled = false;
        }
        else
        {
            studentSearch.disabled = true;
        }

    }   
}

//axtaris bolumunde yazilan ID kriteriyalari oduyurmu
function isSearchValidID(argID)
{
    if(!isEmpty(argID))
    {
        if(isLength(argID))
        {
            if(isDigit(argID))
            {
                if(isExist(argID))
                {
                    return true
                }
                else
                {
                    window.alert("Daxil etdiyiniz ID bazada yoxdur")
                    return false
                }
            }
            else
            {
                
                window.alert("Bazamizda olan IDler yalniz reqemlerden teskil olunub")
                return false
            }
        }
        else
        {
            window.alert("Qeyd : Bazamizda olan IDler yalniz 3 elementden teskil olunub")
            return false
        }
    }
    else
    {
        window.alert("Axtaris xanasini doldurun")
        return false   
    }


    function isLength(argString)
    {
        if(argString.length == 3)
        {
            return true
        }
        else
        {
            return false
        }

    }

    function isDigit(argString)
    {
        for (var i=0; i<argString.length; i++)
        {
            if(argString[i].charCodeAt(0) >= 48 &&
            argString[i].charCodeAt(0) <= 57 )
            {

            }
            else
            {
                return false
            }
        }
        return true
    
    
    
    
    
    }

    function isExist(argString)
    {
        for (var i=0; i<studentArr.length; i++)
        {
            if(argString == studentArr[i].studentID)
            {
                return true
            }
        }
        return false

    }
}

//axtaris bolumunde yazilan Ad kriteriyalari oduyurmu
function isSearchValidName(argStudentName)
{
    if(!isEmpty(argStudentName))
    {
        if(isAlpha(argStudentName))
        {
            if(isCapitalized(argStudentName))
            {
                if(isExist(argStudentName))
                {
                    return true
                }
                else
                {
                    window.alert("Daxil etdiyiniz ad bazada yoxdur")
                    return false
                }
            }
            else
            {
                window.alert("Qeyd: Bazada olan adlarin yalniz birinci herfi boyukdur")
                return false
            }
        }
        else
        {
            window.alert("Qeyd: Bazada olan adlar yalniz herflerden teskil olunub")
            return false
        }        
    }
    else
    {
        window.alert("Axtaris hissesini doldurun")
        return false
    }

    function isExist(argString)
    {
        for (var i=0; i<studentArr.length; i++)
        {
            if(argString == studentArr[i].studentName)
            {
                return true
            }
        }
        return false

    }
}

function SearchData()
{
    if(!isEmpty(studentSearch.value))
    {
        if(searchType.value == "ID")
        {
            if(isSearchValidID(studentSearch.value))
            {
                for(var i=0; i<studentArr.length; i++)
                {
                    if(studentArr[i].studentID == studentSearch.value)
                    {
                        ResultToTable(
                            studentArr[i].studentID, 
                            studentArr[i].studentName, 
                            studentArr[i].studentLastName,
                            studentArr[i].studentEmail, 
                            studentArr[i].studentTel);                               
                    }                                               
                }
            }
        }
        else
        {
            if(searchType.value == "name")
            {
                if(isSearchValidName(studentSearch.value))
                {
                    for(var i=0; i<studentArr.length; i++)
                    {
                        if(studentArr[i].studentName == studentSearch.value)
                        {
                            ResultToTable(
                                studentArr[i].studentID, 
                                studentArr[i].studentName, 
                                studentArr[i].studentLastName,
                                studentArr[i].studentEmail, 
                                studentArr[i].studentTel);      
                        }                            
                    }
                }
            }
        }
    
        function ResultToTable(ID, firstName, lastName, email, telep)
        { 
            resultTable =  document.querySelector("#resultTable tbody"); 
            
            ClearResultTable()
    
            var newRow = resultTable.insertRow()
    
            newRow.insertCell().innerHTML = ID
            newRow.insertCell().innerHTML = firstName
            newRow.insertCell().innerHTML = lastName
            newRow.insertCell().innerHTML = email
            newRow.insertCell().innerHTML = telep
    
            //Kohne neticeleri silsin
            function ClearResultTable()
            {
                if(resultTable.rows.length > 0)
                {
                    for (var i=0; i < resultTable.rows.length; i++)
                    {
                        resultTable.deleteRow(i);                          
                    }  
                }
          
            }
        }
    }
    else
    {
        window.alert("Axtar bolumunu doldurun")
    }
}








