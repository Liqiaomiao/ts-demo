#!/usr/bin/env ts-node
{
    function createTabs(n) {
        return '----'.repeat(n);
    }
    class Person {
        constructor(name) {
            this.name = name;
            this.children = [];
        }
        addChild(child) {
            this.children.push(child);
        }
        interduceFamily(n) {
            n = n || 0;
            console.log(createTabs(n), this.name);
            this.children.forEach(item => {
                item.interduceFamily(n + 1);
            });
        }
    }
    let gparent = new Person('爷爷');
    let parent = new Person('爸爸');
    let child = new Person('儿子');
    gparent.addChild(parent);
    parent.addChild(child);
    gparent.interduceFamily();
}
