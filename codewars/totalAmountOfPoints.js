// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const games = [
	'1:0',
	'2:0',
	'3:0',
	'4:0',
	'2:1',
	'3:1',
	'4:1',
	'3:2',
	'4:2',
	'4:3',
]

const points = (games) => {
	return games.reduce((acc, item) => {
		const home = parseInt(item.split(':')[0])
        const away = parseInt(item.split(':')[1])
        
        switch (true) {
            case (home > away):
                return acc + 3
            case (home < away):
                return acc
            case (home === away):
                return acc + 1
            default:
                return acc
        }

	}, 0)
}

console.log(points(games))
