let age = prompt ("String typedagi malumot kiriting:")
let num = +prompt ("Number typedagi malumot kiriting:")

let boolean = prompt ("Boolean typedagi malumot kiriting:")


confirm ("Hamma malumotlarni togri kiritganizga ishonchiz komilmi?")

alert(
   `
    Siz 1-kiritgan malumotiz ${age} va malumot turi ${typeof(age)},
    Siz 2-kiritgan malumotiz ${num} va malumot turi ${typeof(num)},
    Siz 1-kiritgan malumotiz ${boolean} va malumot turi ${typeof(boolean==boolean)}
`
)