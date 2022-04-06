function copyText() {
    var aName = document.getElementById("agentsName").value;
    var cName = document.getElementById("custName").value;
    var cEmail = document.getElementById("custEmail").value;
    var cPhone = document.getElementById("custPhone").value;
    var cPermissions = document.getElementById("callerPermissions").value;
    var cProduct = document.getElementById("custProduct").value
    var cIssue = document.getElementById("custIssue").value;
    var cDevice = document.getElementById("deviceExtMac").value;
    var cTopology = document.getElementById("networkTopology").value;
    var cArticles = document.getElementById("articlesUsed").value;
    var cTroubleshooting = document.getElementById("custTroubleshooting").value;
    var sResolution = document.getElementById("resolutionEscalation").value;
    var sNotes = document.getElementById("additionalNotes").value;

    //Now, let's get the current date

    var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    
    document.getElementById("temp").value =
        "---Agents name---\n" + aName + " | " + today 
        + "\n\n---Caller's Info---"
        + "\nCustomer's Name: " + cName
        + "\nCaller's Email: " + cEmail 
        + "\nCaller's Callback Phone Number: " + cPhone
        + "\nCaller Permissions: " + cPermissions
        + "\n\n---Call's Info---"
        + "\nProduct: " + cProduct
        + "\n\nSummary of Issue/Request" + "\n" + cIssue
        + "\n\nDevice Ext/MAC (If applicable):" + "\n" + cDevice
        + "\n\nNetwork Topology: " + "\n" + cTopology
        + "\n\nArticles or link used?"
        + "\n" + cArticles
        + "\n\nTroubleshooting/Replication Steps:"
        + "\n" + cTroubleshooting
        + "\n\nResolution/Escalation (Was the issue resolved or escalated?)"
        + "\n" + sResolution
        + "\n\nAdditional Notes:"
        + "\n" + sNotes;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}