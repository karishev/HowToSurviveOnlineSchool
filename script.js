let videostart = document.getElementById('videostart');

document.addEventListener('DOMContentLoaded', () => {
	let title = document.querySelector('.title');
	title.addEventListener('click', () => {
		title.classList.add('fade');
		// document.querySelector('.draggable').style.display = "flex";
		// enableScroll();
		setTimeout(() => {
			title.remove();
			videostart.play();

			// backgroundmusic.play();
			// backgroundmusic.volume = 0.02;
		}, 1000);
	})
})

videostart.addEventListener("timeupdate", () => {
	if (videostart.ended) {
		document.getElementById("video-container1").classList.add("fade");
		videostart.classList.add('fade');
		setTimeout(() => {
			document.getElementById("video-container1").remove();

			backgroundmusic.play();
			backgroundmusic.volume = 0.02;
		}, 1000);
	}
})


const tasksListElement = document.querySelector(`.tasks__list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
	evt.target.classList.add(`selected`);
})
  
tasksListElement.addEventListener(`dragend`, (evt) => {
	evt.target.classList.remove(`selected`);
});

tasksListElement.addEventListener(`dragover`, (evt) => {
	// Разрешаем сбрасывать элементы в эту область
	evt.preventDefault();
  
	// Находим перемещаемый элемент
	const activeElement = tasksListElement.querySelector(`.selected`);
	// Находим элемент, над которым в данный момент находится курсор
	const currentElement = evt.target;
	// Проверяем, что событие сработало:
	// 1. не на том элементе, который мы перемещаем,
	// 2. именно на элементе списка
	const isMoveable = activeElement !== currentElement &&
	  currentElement.classList.contains(`tasks__item`);
  
	// Если нет, прерываем выполнение функции
	if (!isMoveable) {
		return;
	}
  
	// Находим элемент, перед которым будем вставлять
	const nextElement = (currentElement === activeElement.nextElementSibling) ?
		currentElement.nextElementSibling :
		currentElement;
  
	// Вставляем activeElement перед nextElement
	tasksListElement.insertBefore(activeElement, nextElement);
});

const getNextElement = (cursorPosition, currentElement) => {
	// Получаем объект с размерами и координатами
	const currentElementCoord = currentElement.getBoundingClientRect();
	// Находим вертикальную координату центра текущего элемента
	const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
	// Если курсор выше центра элемента, возвращаем текущий элемент
	// В ином случае — следующий DOM-элемент
	const nextElement = (cursorPosition < currentElementCenter) ?
		currentElement :
		currentElement.nextElementSibling;
  
	return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
	evt.preventDefault();
  
	const activeElement = tasksListElement.querySelector(`.selected`);
	const currentElement = evt.target;
	const isMoveable = activeElement !== currentElement &&
	  currentElement.classList.contains(`tasks__item`);
  
	if (!isMoveable) {
	  return;
	}
  
	// evt.clientY — вертикальная координата курсора в момент,
	// когда сработало событие
	const nextElement = getNextElement(evt.clientY, currentElement);
  
	// Проверяем, нужно ли менять элементы местами
	if (
		nextElement && 
		activeElement === nextElement.previousElementSibling ||
		activeElement === nextElement
	) {
	  // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
	  return;
	}
  
	tasksListElement.insertBefore(activeElement, nextElement);
});

let backgroundmusic = document.getElementById('backgroundmusic');
backgroundmusic.volume = 0.02;

window.onload = function() {

	// Video
	var video1 = document.getElementById("video1");
	var video2 = document.getElementById("video2");
	var video3 = document.getElementById("video3");

	

	// Buttons
	var playButton1 = document.getElementById("play1");
	var pauseButton1 = document.getElementById('pause1');
	var muteButton1 = document.getElementById("tomute1");
	var unmuteButton1 = document.getElementById("muted1");
	var fullScreenButton1 = document.getElementById("full-screen1");
	var playButton2 = document.getElementById("play2");
	var pauseButton2 = document.getElementById('pause2');
	var muteButton2 = document.getElementById("tomute2");
	var unmuteButton2 = document.getElementById("muted2");
	var fullScreenButton2 = document.getElementById("full-screen2");
	var playButton3 = document.getElementById("play3");
	var pauseButton3 = document.getElementById('pause3');
	var muteButton3 = document.getElementById("tomute3");
	var unmuteButton3 = document.getElementById("muted3");
	var fullScreenButton3 = document.getElementById("full-screen3");
	

	// Sliders
	var seekBar1 = document.getElementById("seek-bar1");
	var volumeBar1 = document.getElementById("volume-bar1");
	var seekBar2 = document.getElementById("seek-bar2");
	var volumeBar2 = document.getElementById("volume-bar2");
	var seekBar3 = document.getElementById("seek-bar3");
	var volumeBar3 = document.getElementById("volume-bar3");

	// var videolast = document.getElementById("videolast");
	
	// var playButtonlast = document.getElementById("playlast");
	// var pauseButtonlast = document.getElementById('pauselast');
	// var muteButtonlast = document.getElementById("tomutelast");
	// var unmuteButtonlast = document.getElementById("mutedlast");
	// var fullScreenButtonlast = document.getElementById("full-screenlast");

	// var seekBarlast = document.getElementById("seek-barlast");
	// var volumeBarlast = document.getElementById("volume-barlast");


	// Event listener for the play/pause button
	playButton1.addEventListener("click", function() {
		if (video1.paused == true ) {
			// Play the video
			video1.play();

			// Update the button text to 'Pause'
			playButton1.style.display = "none";
			pauseButton1.style.display = "inline";
		}
	});
	

	pauseButton1.addEventListener("click", function() {
		if (video1.paused == false) {
			video1.pause();

			playButton1.style.display = "inline";
			pauseButton1.style.display = "none";
		}
	});

	video1.addEventListener("click", function() {
		if (video1.paused == false) {
			video1.pause();

			playButton1.style.display = "inline";
			pauseButton1.style.display = "none";
		}
		else if (video1.paused == true ) {
			// Play the video
			video1.play();

			// Update the button text to 'Pause'
			playButton1.style.display = "none";
			pauseButton1.style.display = "inline";
		}
	});


	// Event listener for the mute button
	muteButton1.addEventListener("click", function() {
		if (video1.muted == false) {
			// Mute the video
			video1.muted = true;

			// Update the button text
			muteButton1.style.display = "none";
			unmuteButton1.style.display = "inline";
			volumeBar1.value = 0;
			video1.volume = 0;
		}
	});

	unmuteButton1.addEventListener("click", function() {
		if (video1.muted == true) {
			video1.muted = false;
			muteButton1.style.display = "inline";
			unmuteButton1.style.display = "none";
			volumeBar1.value = video1.volume;
		}
	});




	// Event listener for the full-screen button
	fullScreenButton1.addEventListener("click", function() {
		if (video1.requestFullscreen) {
			video1.requestFullscreen();
		} else if (video1.mozRequestFullScreen) {
			video1.mozRequestFullScreen(); // Firefox
		} else if (video1.webkitRequestFullscreen) {
			video1.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar1.addEventListener("change", function() {
		// Calculate the new time
		var time = video1.duration * (seekBar1.value / 100);

		// Update the video1 time
		video1.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video1.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video1.duration) * video1.currentTime;

		// Update the slider value
		seekBar1.value = value;
	});

	// Pause the video1 when the seek handle is being dragged
	seekBar1.addEventListener("mousedown", function() {
		video1.pause();
	});

	// Play the video1 when the seek handle is dropped
	seekBar1.addEventListener("mouseup", function() {
		video1.play();
	
		playButton1.style.display = "none";
		pauseButton1.style.display = "inline";
		
	});

	// Event listener for the volume bar
	volumeBar1.addEventListener("change", function() {
		// Update the video1 volume
		video1.volume = volumeBar1.value;
		if(video1.muted == true) {
			video1.muted = false;
			muteButton1.style.display = "inline";
			unmuteButton1.style.display = "none";
		}
	});




	// Event listener for the play/pause button
	playButton2.addEventListener("click", function() {
		if (video2.paused == true ) {
			// Play the video2
			video2.play();

			// Update the button text to 'Pause'
			playButton2.style.display = "none";
			pauseButton2.style.display = "inline";
		}
	});
	

	pauseButton2.addEventListener("click", function() {
		if (video2.paused == false) {
			video2.pause();

			playButton2.style.display = "inline";
			pauseButton2.style.display = "none";
		}
	});

	video2.addEventListener("click", function() {
		if (video2.paused == false) {
			video2.pause();

			playButton2.style.display = "inline";
			pauseButton2.style.display = "none";
		}
		else if (video2.paused == true ) {
			// Play the video2
			video2.play();

			// Update the button text to 'Pause'
			playButton2.style.display = "none";
			pauseButton2.style.display = "inline";
		}
	});


	// Event listener for the mute button
	muteButton2.addEventListener("click", function() {
		if (video2.muted == false) {
			// Mute the video2
			video2.muted = true;

			// Update the button text
			muteButton2.style.display = "none";
			unmuteButton2.style.display = "inline";
			volumeBar2.value = 0;
			video2.volume = 0;
		}
	});

	unmuteButton2.addEventListener("click", function() {
		if (video2.muted == true) {
			video2.muted = false;
			muteButton2.style.display = "inline";
			unmuteButton2.style.display = "none";
			volumeBar2.value = video2.volume;
		}
	});




	// Event listener for the full-screen button
	fullScreenButton2.addEventListener("click", function() {
		if (video2.requestFullscreen) {
			video2.requestFullscreen();
		} else if (video2.mozRequestFullScreen) {
			video2.mozRequestFullScreen(); // Firefox
		} else if (video2.webkitRequestFullscreen) {
			video2.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar2.addEventListener("change", function() {
		// Calculate the new time
		var time = video2.duration * (seekBar2.value / 100);

		// Update the video2 time
		video2.currentTime = time;
	});

	
	// Update the seek bar as the video2 plays
	video2.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video2.duration) * video2.currentTime;

		// Update the slider value
		seekBar2.value = value;
	});

	// Pause the video2 when the seek handle is being dragged
	seekBar2.addEventListener("mousedown", function() {
		video2.pause();
	});

	// Play the video2 when the seek handle is dropped
	seekBar2.addEventListener("mouseup", function() {
		video2.play();
	
		playButton2.style.display = "none";
		pauseButton2.style.display = "inline";
		
	});

	// Event listener for the volume bar
	volumeBar2.addEventListener("change", function() {
		// Update the video2 volume
		video2.volume = volumeBar2.value;
		if(video2.muted == true) {
			video2.muted = false;
			muteButton2.style.display = "inline";
			unmuteButton2.style.display = "none";
		}
	});




	// Event listener for the play/pause button 3333
	playButton3.addEventListener("click", function() {
		if (video3.paused == true ) {
			// Play the video3
			video3.play();

			// Update the button text to 'Pause'
			playButton3.style.display = "none";
			pauseButton3.style.display = "inline";
		}
	});
	

	pauseButton3.addEventListener("click", function() {
		if (video3.paused == false) {
			video3.pause();

			playButton3.style.display = "inline";
			pauseButton3.style.display = "none";
		}
	});

	video3.addEventListener("click", function() {
		if (video3.paused == false) {
			video3.pause();

			playButton3.style.display = "inline";
			pauseButton3.style.display = "none";
		}
		else if (video3.paused == true ) {
			// Play the video3
			video3.play();

			// Update the button text to 'Pause'
			playButton3.style.display = "none";
			pauseButton3.style.display = "inline";
		}
	});


	// Event listener for the mute button
	muteButton3.addEventListener("click", function() {
		if (video3.muted == false) {
			// Mute the video3
			video3.muted = true;

			// Update the button text
			muteButton3.style.display = "none";
			unmuteButton3.style.display = "inline";
			volumeBar3.value = 0;
			video3.volume = 0;
		}
	});

	unmuteButton3.addEventListener("click", function() {
		if (video3.muted == true) {
			video3.muted = false;
			muteButton3.style.display = "inline";
			unmuteButton3.style.display = "none";
			volumeBar3.value = video3.volume;
		}
	});




	// Event listener for the full-screen button
	fullScreenButton3.addEventListener("click", function() {
		if (video3.requestFullscreen) {
			video3.requestFullscreen();
		} else if (video3.mozRequestFullScreen) {
			video3.mozRequestFullScreen(); // Firefox
		} else if (video3.webkitRequestFullscreen) {
			video3.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar3.addEventListener("change", function() {
		// Calculate the new time
		var time = video3.duration * (seekBar3.value / 100);

		// Update the video3 time
		video3.currentTime = time;
	});

	
	// Update the seek bar as the video3 plays
	video3.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video3.duration) * video3.currentTime;

		// Update the slider value
		seekBar3.value = value;
	});

	// Pause the video3 when the seek handle is being dragged
	seekBar3.addEventListener("mousedown", function() {
		video3.pause();
	});

	// Play the video3 when the seek handle is dropped
	seekBar3.addEventListener("mouseup", function() {
		video3.play();
	
		playButton3.style.display = "none";
		pauseButton3.style.display = "inline";
		
	});

	// Event listener for the volume bar
	volumeBar3.addEventListener("change", function() {
		// Update the video3 volume
		video3.volume = volumeBar3.value;
		if(video3.muted == true) {
			video3.muted = false;
			muteButton3.style.display = "inline";
			unmuteButton3.style.display = "none";
		}
	});





	// // Event listener for the play/pause button 3333
	// playButtonlast.addEventListener("click", function() {
	// 	if (videolast.paused == true ) {
	// 		// Play the videolast
	// 		videolast.play();

	// 		// Update the button text to 'Pause'
	// 		playButtonlast.style.display = "none";
	// 		pauseButtonlast.style.display = "inline";
	// 	}
	// });
	

	// pauseButtonlast.addEventListener("click", function() {
	// 	if (videolast.paused == false) {
	// 		videolast.pause();

	// 		playButtonlast.style.display = "inline";
	// 		pauseButtonlast.style.display = "none";
	// 	}
	// });

	// videolast.addEventListener("click", function() {
	// 	if (videolast.paused == false) {
	// 		videolast.pause();

	// 		playButtonlast.style.display = "inline";
	// 		pauseButtonlast.style.display = "none";
	// 	}
	// 	else if (videolast.paused == true ) {
	// 		// Play the videolast
	// 		videolast.play();

	// 		// Update the button text to 'Pause'
	// 		playButtonlast.style.display = "none";
	// 		pauseButtonlast.style.display = "inline";
	// 	}
	// });


	// // Event listener for the mute button
	// muteButtonlast.addEventListener("click", function() {
	// 	if (videolast.muted == false) {
	// 		// Mute the videolast
	// 		videolast.muted = true;

	// 		// Update the button text
	// 		muteButtonlast.style.display = "none";
	// 		unmuteButtonlast.style.display = "inline";
	// 		volumeBarlast.value = 0;
	// 		videolast.volume = 0;
	// 	}
	// });

	// unmuteButtonlast.addEventListener("click", function() {
	// 	if (videolast.muted == true) {
	// 		videolast.muted = false;
	// 		muteButtonlast.style.display = "inline";
	// 		unmuteButtonlast.style.display = "none";
	// 		volumeBarlast.value = videolast.volume;
	// 	}
	// });




	// // Event listener for the full-screen button
	// fullScreenButtonlast.addEventListener("click", function() {
	// 	if (videolast.requestFullscreen) {
	// 		videolast.requestFullscreen();
	// 	} else if (videolast.mozRequestFullScreen) {
	// 		videolast.mozRequestFullScreen(); // Firefox
	// 	} else if (videolast.webkitRequestFullscreen) {
	// 		videolast.webkitRequestFullscreen(); // Chrome and Safari
	// 	}
	// });


	// // Event listener for the seek bar
	// seekBarlast.addEventListener("change", function() {
	// 	// Calculate the new time
	// 	var time = videolast.duration * (seekBarlast.value / 100);

	// 	// Update the videolast time
	// 	videolast.currentTime = time;
	// });

	
	// // Update the seek bar as the videolast plays
	// videolast.addEventListener("timeupdate", function() {
	// 	// Calculate the slider value
	// 	var value = (100 / videolast.duration) * videolast.currentTime;

	// 	// Update the slider value
	// 	seekBarlast.value = value;
	// });

	// // Pause the videolast when the seek handle is being dragged
	// seekBarlast.addEventListener("mousedown", function() {
	// 	videolast.pause();
	// });

	// // Play the videolast when the seek handle is dropped
	// seekBarlast.addEventListener("mouseup", function() {
	// 	videolast.play();
	
	// 	playButtonlast.style.display = "none";
	// 	pauseButtonlast.style.display = "inline";
		
	// });

	// // Event listener for the volume bar
	// volumeBarlast.addEventListener("change", function() {
	// 	// Update the videolast volume
	// 	videolast.volume = volumeBarlast.value;
	// 	if(videolast.muted == true) {
	// 		videolast.muted = false;
	// 		muteButtonlast.style.display = "inline";
	// 		unmuteButtonlast.style.display = "none";
	// 	}
	// });


	let right = document.getElementById('right');
	let right2 = document.getElementById("right2");
	let choice = document.getElementById("choice");
	let calendarpage = document.getElementById("calendar");
	let left2 = document.getElementById("left2");

	right.addEventListener('click', () => {
		choice.style.zIndex = "-1";
	})

	left.addEventListener('click', () => {
		choice.style.zIndex = "19";
	})

	right2.addEventListener("click", () => {
		calendarpage.style.zIndex = "-1";
	})

	left2.addEventListener("click", () => {
		calendarpage.style.zIndex = "10";
	})

	let mutee = document.getElementById("mutee");
	let unmutee = document.getElementById("unmutee");
	let mutee2 = document.getElementById("mutee2");
	let unmutee2 = document.getElementById("unmutee2");
	let mutee3 = document.getElementById("mutee3");
	let unmutee3 = document.getElementById("unmutee3");
	
	mutee.addEventListener("click", () => {
		mutee.style.display = "none";
		unmutee.style.display = "inline";
		mutee2.style.display = "none";
		unmutee2.style.display = "inline";
		mutee3.style.display = "none";
		unmutee3.style.display = "inline";
		backgroundmusic.volume = 0;
		backgroundmusic.pause();
	})

	mutee2.addEventListener("click", () => {
		mutee.style.display = "none";
		unmutee.style.display = "inline";
		mutee2.style.display = "none";
		unmutee2.style.display = "inline";
		mutee3.style.display = "none";
		unmutee3.style.display = "inline";
		backgroundmusic.volume = 0;
		backgroundmusic.pause();
	})
	mutee3.addEventListener("click", () => {
		mutee.style.display = "none";
		unmutee.style.display = "inline";
		mutee2.style.display = "none";
		unmutee2.style.display = "inline";
		mutee3.style.display = "none";
		unmutee3.style.display = "inline";
		backgroundmusic.volume = 0;
		backgroundmusic.pause();
	})

	
	unmutee.addEventListener("click", () => {
		// console.log("yes4");
		mutee.style.display = "inline";
		unmutee.style.display = "none";
		mutee2.style.display = "inline";
		unmutee2.style.display = "none";
		mutee3.style.display = "inline";
		unmutee3.style.display = "none";
		backgroundmusic.volume = 0.02;
		backgroundmusic.play();
	})

	unmutee2.addEventListener("click", () => {
		// console.log("yes4");
		mutee.style.display = "inline";
		unmutee.style.display = "none";
		mutee2.style.display = "inline";
		unmutee2.style.display = "none";
		mutee3.style.display = "inline";
		unmutee3.style.display = "none";
		backgroundmusic.volume = 0.02;
		backgroundmusic.play();
	})

	unmutee3.addEventListener("click", () => {
		// console.log("yes4");
		mutee.style.display = "inline";
		unmutee.style.display = "none";
		mutee2.style.display = "inline";
		unmutee2.style.display = "none";
		mutee3.style.display = "inline";
		unmutee3.style.display = "none";
		backgroundmusic.volume = 0.02;
		backgroundmusic.play();
	})
};





let step1 = document.querySelector('.step1');
let step2 = document.querySelector('.step2');
let step3 = document.querySelector('.step3');

let closeButton1 = document.getElementById('closeButton1');
let closeButton2 = document.getElementById('closeButton2');
let closeButton3 = document.getElementById('closeButton3');

let step1show = document.querySelectorAll(".step1show");
let step2show = document.querySelectorAll(".step2show");
let step3show = document.querySelectorAll(".step3show");

let clicktowatch = document.getElementById('clicktowatch');

let opened1 = false;
let opened2 = false;
let opened3 = false;
step1.addEventListener('click', function() {
	if (!opened1) {
		step1.style.width = "120vw";
		step1.style.height = "80vh";
		document.querySelector('.words1').style.display = "none";
		setTimeout (() => {
			for (var i = 0; i<2; i++) {
				step1show[i].style.display = "block";
			}
		}, 200);
		
		setTimeout (() => {
			step2.style.display = "none";
			step3.style.display = "none";
			step1show[2].style.display = "block";
		}, 1000);
		document.querySelector('.words2').style.display = "none";
		document.querySelector('.words3').style.display = "none";
		step2.style.width = "0vw";
		step2.style.height = "0vh";
		step3.style.width = "0vw";
		step3.style.height = "0vh";
		// step1.style.background = "#373737";
		opened1 = true;
		setTimeout(() => {
			backgroundmusic.volume = 0.015;
		},500);
		setTimeout(() => {
			backgroundmusic.volume = 0.01;
		},1000);
		setTimeout(() => {
			backgroundmusic.volume = 0.005;
		},1500);
		setTimeout(() => {
			backgroundmusic.volume = 0;
		},2000);
	}
});


closeButton1.addEventListener('click', function() {
	step1.style.width = "25vw";
	step1.style.height = "30vh";
	document.querySelector('.words1').style.display = "block";
	for (var i = 0; i<3; i++) {
		step1show[i].style.display = "none";
	}
	step2.style.display = "flex";
	step3.style.display = "flex";
	
	setTimeout(() => {
		step2.style.width = "25vw";
		step2.style.height = "30vh";
		step3.style.width = "25vw";
		step3.style.height = "30vh";
		document.querySelector('.words2').style.display = "block";
		document.querySelector('.words3').style.display = "block";
	}, 200)
	// step1.style.background = "#207794";
	setTimeout(() => {
		opened1 = false;
	}, 1000)
	video1.load();
	backgroundmusic.load();
	backgroundmusic.play();
	backgroundmusic.volume = 0.02;
	mutee.style.display = "inline";
	unmutee.style.display = "none";
})

step2.addEventListener('click', function() {
	if (!opened2) {
		step2.style.width = "120vw";
		step2.style.height = "80vh";
		document.querySelector('.words2').style.display = "none";
		setTimeout (() => {
			for (var i = 0; i<2; i++) {
				step2show[i].style.display = "block";
			}
		}, 200);
		
		setTimeout (() => {
			step1.style.display = "none";
			step3.style.display = "none";
			step2show[2].style.display = "block";
		}, 1000);
		
		document.querySelector('.words1').style.display = "none";
		document.querySelector('.words3').style.display = "none";
		step1.style.width = "0vw";
		step1.style.height = "0vh";
		step3.style.width = "0vw";
		step3.style.height = "0vh";
		// step1.style.background = "#373737";
		opened2 = true;
		setTimeout(() => {
			backgroundmusic.volume = 0.015;
		},500);
		setTimeout(() => {
			backgroundmusic.volume = 0.01;
		},1000);
		setTimeout(() => {
			backgroundmusic.volume = 0.005;
		},1500);
		setTimeout(() => {
			backgroundmusic.volume = 0;
		},2000);
		setTimeout(() => {
			backgroundmusic.pause();
		},2000);
	}
});

closeButton2.addEventListener('click', function() {
	step2.style.width = "25vw";
	step2.style.height = "30vh";
	document.querySelector('.words2').style.display = "block";
	for (var i = 0; i<3; i++) {
		step2show[i].style.display = "none";
	}
	step1.style.display = "flex";
	step3.style.display = "flex";
	setTimeout(() => {
		step1.style.width = "25vw";
		step1.style.height = "30vh";
		step3.style.width = "25vw";
		step3.style.height = "30vh";
		document.querySelector('.words1').style.display = "block";
		document.querySelector('.words3').style.display = "block";
	}, 200);
	
	// step1.style.background = "#207794";
	setTimeout(() => {
		opened2 = false;
	}, 1000)
	video2.load();
	backgroundmusic.load();
	backgroundmusic.play();
	backgroundmusic.volume = 0.02;
	mutee.style.display = "inline";
	unmutee.style.display = "none";
})

step3.addEventListener('click', function() {
	if (!opened3) {
		step3.style.width = "120vw";
		step3.style.height = "80vh";
		document.querySelector('.words3').style.display = "none";
		setTimeout (() => {
			for (var i = 0; i<2; i++) {
				step3show[i].style.display = "block";
			}
		}, 200);
		
		setTimeout (() => {
			step1.style.display = "none";
			step2.style.display = "none";
			step3show[2].style.display = "block";
		}, 1000);
		
		document.querySelector('.words1').style.display = "none";
		document.querySelector('.words2').style.display = "none";
		step1.style.width = "0vw";
		step1.style.height = "0vh";
		step2.style.width = "0vw";
		step2.style.height = "0vh";
		// step1.style.background = "#373737";
		opened3 = true;
		setTimeout(() => {
			backgroundmusic.volume = 0.015;
		},500);
		setTimeout(() => {
			backgroundmusic.volume = 0.01;
		},1000);
		setTimeout(() => {
			backgroundmusic.volume = 0.005;
		},1500);
		setTimeout(() => {
			backgroundmusic.volume = 0;
		},2000);
		setTimeout(() => {
			backgroundmusic.pause();
		},2000);
	}
});

closeButton3.addEventListener('click', function() {
	step3.style.width = "25vw";
	step3.style.height = "30vh";
	document.querySelector('.words3').style.display = "block";
	for (var i = 0; i<3; i++) {
		step3show[i].style.display = "none";
	}
	step1.style.display = "flex";
	step2.style.display = "flex";
	setTimeout(() => {
		step1.style.width = "25vw";
		step1.style.height = "30vh";
		step2.style.width = "25vw";
		step2.style.height = "30vh";
		document.querySelector('.words1').style.display = "block";
		document.querySelector('.words2').style.display = "block";
	}, 200);
	
	// step1.style.background = "#207794";
	setTimeout(() => {
		opened3 = false;
	}, 1000)
	video3.load();
	backgroundmusic.load();
	backgroundmusic.play();
	backgroundmusic.volume = 0.02;
	mutee.style.display = "inline";
	unmutee.style.display = "none";
})

