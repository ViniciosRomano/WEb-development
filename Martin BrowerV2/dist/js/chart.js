let firstChart = document.getElementById('curvadecrescimento').getContext('2d')
let fontSize


function screenDetection() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        fontSize = 8
    } else {
        fontSize = 18
    }
}


let chartCrescRob = new Chart(firstChart, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13','14', '15', '16', '17', '18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [
            {
                label: 'Curva A',
                data: [0, 100, 80, 20, 121, 80, 40, 150, 120, 80, 60, 25,180,165,142,80,50,200,170,150,120,80,60,50,180,150,120,100,50,200],
                backgroundColor: ['rgba(82, 59, 0, 0.5)'],
                borderColor: ['#523B00'],
                borderWidth: 1
            },
            {
                label: 'Curva B',
                data: [0, 190, 120, 100, 80,180,150,120,85,60,30,150,140,120,100,80,70,65,50,140,120,100,80,60,50,80,50,70,60,50],
                backgroundColor: ['rgb(129,95,8,0.5)'],
                borderColor: ['#815F08'],
                borderWidth: 1
            },
            {
                label: 'Curva C',
                data: [0, 100,80,60,90,55,50,80,130,70,60,50,150,120,40,145,80,50,90,50,80,50,40,100,70,60,55,50,80,50],
                backgroundColor: ['rgb(232,195,98,0.5)'],
                borderColor: ['#E8C362'],
                pointStyle: 'circle',

                borderWidth: 1
            },
            {
                label: 'Margem de segurança',
                data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                borderColor: ['#B80f0a'],
                backgroundColor: ['#B80f0a'],
                pointStyle: 'line',
                borderWidth: 0.5,
                showline: true,

            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: false,
                text: 'Curva de itens'
            },
            legend: {     
                labels: {
                    font: {
                        size: fontSize
                    }
                }
            },
            responsive: true
            
        }
    }
});


