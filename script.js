 function dynamicdropdown(listindex)
    {
        switch (listindex)
        {
        case "series" :
            document.getElementById("rating").options[0]=new Option("Select rating","");
            document.getElementById("rating").options[1]=new Option("Any","Any");
            document.getElementById("rating").options[2]=new Option("TV-Y","y");
            document.getElementById("rating").options[3]=new Option("TV-Y7","y7");
            document.getElementById("rating").options[4]=new Option("TV-G","g");
            document.getElementById("rating").options[5]=new Option("TV-PG","pg");
            document.getElementById("rating").options[6]=new Option("TV-14","14");
            document.getElementById("rating").options[7]=new Option("TV-MA","ma");
            break;
        case "movie" :
            document.getElementById("rating").options[0]=new Option("Select rating","");
            document.getElementById("rating").options[1]=new Option("Any","Any");
            document.getElementById("rating").options[2]=new Option("G","g");
            document.getElementById("rating").options[3]=new Option("PG","pg");
            document.getElementById("rating").options[4]=new Option("PG-13","pg13");
            document.getElementById("rating").options[5]=new Option("R","r");
            document.getElementById("rating").options[6]=new Option("NC-17","nc17");
            document.getElementById("rating").options[7]=new Option("Unrated","unrated");
            break;
        }
        return true;
    }
