function bmi(weight, height) {
    let r = weight/(height*height);
    if(r<=18.5) return "Underweight"
    else if(r<=25.0) return "Normal"
    else if(r<=30.0) return "Overweight"
    return "Obese";
  }