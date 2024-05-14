function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let totalBMI = weight / (height / 100) ** 2;
    let resultMSG = "Your BMI is " + totalBMI.toFixed(2);

    if (totalBMI < 18.5)
    {
        resultMSG = resultMSG + " (UnderWeight)"
    }
    else if (totalBMI >= 18.5 && totalBMI < 25)
    {
        resultMSG = resultMSG + " (Normal)"
    }
    else if (totalBMI >= 25 && totalBMI < 30)
    {
        resultMSG = resultMSG + " (OverWeight)"
    }
    else if (totalBMI >= 30)
    {
        resultMSG = resultMSG + " (Obese)"
    }
    else {
        resultMSG = "Enter Valid Height & Weight!"
    }

    document.getElementById("result").innerHTML = resultMSG;
}