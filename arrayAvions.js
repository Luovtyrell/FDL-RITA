const avions = []
avions.push(new AvioComercial("AC1", "Airbus", 4533, 20, 170, 30))
avions.push(new Avioneta("AV1", "Remos", 700, 9, 8, 1))
avions.push(new JetPrivat("JP1", "Eclipse", 12432, 25, 3, 2))

console.table(avions)