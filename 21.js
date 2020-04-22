document.querySelectorAll(".bt")[1].addEventListener("click",easy);
document.querySelectorAll(".bt")[2].addEventListener("click",hard);
function hard()
{ 
	
	document.querySelectorAll(".bt")[2].classList.add("tog");
	document.querySelectorAll(".bt")[1].classList.remove("tog");
	document.querySelector("p").textContent="Begin your game!!";
	document.querySelector(".reset").textContent="NEW COLOURS";

	function main()
	{
	toreset();
	
	squares=document.querySelectorAll(".sq");	
	ans=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
	document.querySelector("span").textContent=ans;
	ran=Math.floor(Math.random()*6);
	squares[ran].style.backgroundColor=ans;
	squares[ran].style.opacity=1;
	for(i=0;i<=5;i++)
	{
		if(i!=ran)
		{
			squares[i].style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
			squares[i].style.opacity=1;
		}
		
	}
	for(j=0;j<=5;j++)
	{
		var click=null;
		squares[j].addEventListener("click",function()
		{

			click=this.style.backgroundColor;
			if(click==ans)
			{
				document.querySelector(".heading").style.backgroundColor=ans;
				for(var z=0;z<=5;z++)
				{
				document.querySelectorAll(".sq")[z].style.backgroundColor=ans;
				document.querySelectorAll(".sq")[z].style.opacity=1;
				
				}
				
				document.querySelector("p").textContent="You Got It Right!!";
				document.querySelector(".reset").textContent="PLAY AGAIN?";
			}
			else
			{
				this.style.opacity=0;
				document.querySelector("p").textContent="Please Try Again :("
			}
		
		});
	}}
	document.querySelector(".reset").addEventListener("click",main);

}

function easy()
{
	document.querySelector("p").textContent="Begin your game!!";
	document.querySelector(".reset").addEventListener("click",main2);
	document.querySelectorAll(".bt")[1].classList.add("tog");
	document.querySelectorAll(".bt")[2].classList.remove("tog");
	document.querySelector(".reset").textContent="NEW COLOURS";

	function main2()
	{
	toreset();

	squares=document.querySelectorAll(".sq");	
	squares[3].style.backgroundColor="#232323";
	squares[4].style.backgroundColor="#232323";
	squares[5].style.backgroundColor="#232323";
	ans=`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
	document.querySelector("span").textContent=ans;
	ran=Math.floor(Math.random()*3);
	squares[ran].style.backgroundColor=ans;
	for(i=0;i<=2;i++)
	{
		if(i!=ran)
		{
			squares[i].style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
		}
		squares[i].style.opacity=1;
		
	}
	for(j=0;j<=2;j++)
	{
		var click=null;
		squares[j].addEventListener("click",function()
		{
			click=this.style.backgroundColor;
			console.log(ans);
			if(click==ans)
			{
				document.querySelector(".heading").style.backgroundColor=ans;
				for(var z=0;z<=2;z++)
				{
				document.querySelectorAll(".sq")[z].style.backgroundColor=ans;
				document.querySelectorAll(".sq")[z].style.opacity=1;
				}
				squares[3].style.backgroundColor="#232323";
				squares[4].style.backgroundColor="#232323";
				squares[5].style.backgroundColor="#232323";
				document.querySelector("p").textContent="You Got It Right!!";
				document.querySelector(".reset").textContent="PLAY AGAIN?";
			}
			else
			{
				this.style.opacity=0;
				document.querySelector("p").textContent="Please Try Again!!";
			}

		});
	}}
	}
function toreset()
{
	document.querySelector("p").textContent="Choose a Colour!!";
	var ans=null;
	var ran=null;
	var i,j=null;
	var squares=null;
	document.querySelector(".reset").textContent="NEW COLOURS";
	document.querySelector(".heading").style.backgroundColor="steelblue";

}