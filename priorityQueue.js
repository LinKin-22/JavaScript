/*Priority Queues */

function priorityQueue() {
    var collection = [];

    this.printCollection = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (let i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if(!added) {
                collection.push(element);
            }
        }
    }

    
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

var pq = new priorityQueue();

pq.enqueue(['Louis Tomlinson', 2]);
pq.enqueue(['Zayn Malik', 3]);
pq.enqueue(['Harry Styles', 1]);
pq.enqueue(['Liam Payne', 2]);

pq.printCollection();

pq.dequeue();
pq.front();
pq.printCollection();

