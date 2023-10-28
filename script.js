    <script>

        let cells=document.querySelectorAll(".cell")
        cells=Array.from(cells)

        let player="X"

        let winningCombinations=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        cells.forEach(function(cell){
            cell.addEventListener("click",function(){ //kunai pani particular euta chij access garna cha vane FOREACH lagaihalni function ko vitra euta name diyera ani tyai name.event listener rakhdesi tyo run huncha

                if(cell.innerHTML.trim()===""){
                cell.innerHTML=player
                checkwinner()
                player=player =="X"? "O" : "X"
                }
            })
        })
function checkwinner(){
        winningCombinations.forEach(function(combination){ //kei tya vitra ko sabai kura access garna cha vane foreach lagcha
           let win= combination.every(idx=> cells[idx].innerHTML.trim()==player) // yedi vitra ko pani feri vitra jana paryo vane every lagcha eutai function ma
           if (win){
            combination.forEach(idx => cells[idx].classList.add("winning"));
           }
        })
    }
</script>
