/** plopfile.js */

module.exports = function (plop) {
    plop.setGenerator('ReproSvelte', {
        description: 'reproduce in svelte',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'The name of the component'
        }],
        actions: [{
            type: 'add',
            path: 'src/stories/@reproduce/{{name}}/{{name}}.svelte',
            templateFile: 'plop-templates/comp.svelte.hbs'
        }, {
            type: 'add',
            path: 'src/stories/@reproduce/{{name}}/index.stories.js',
            templateFile: 'plop-templates/stories.js.hbs'
        }]
    });

    plop.setGenerator('Animaux', {
        description: 'animal css challenge',
        prompts: [{
            type: 'input',
            name: 'title',
            message: 'The title of the pen' // Animal CSS / 1.Adder
        }, {
            type: 'input',
            name: 'penID',
            message: 'The id of the pen' // bGOYENY
        },
        {
            type: 'input',
            name: 'desc',
            message: 'The desc of the demo' // this is desc
        }, {
            type: 'input',
            name: 'link',
            message: 'The link at bilibili' // https://www.bilibili.com/video/BV12345678/
        }],
        actions: function (data) {
            if (!data?.title || !data?.penID || !data?.link) throw Error('Empty input');
            const index = String(data.title).match(/\/ (\d*)./)[1];
            if (!index) throw Error('Invalid index');
            const fileIndex = index.padStart(3, '0');

            console.log(`CodePen: ${data.title} | ${data.penID}`);

            return [{
                type: 'add',
                path: `src/stories/@cssOnly/animals/${fileIndex}.mdx`,
                templateFile: 'plop-templates/animal.hbs',
                data
            }];
        }
    });

    plop.setGenerator('100days', {
        description: '[Archived] 100 days css challenge',
        prompts: [{
            type: 'input',
            name: 'day',
            message: 'The number of the day'
        }, {
            type: 'input',
            name: 'short',
            message: 'The desc of the demo'
        }],
        actions: function (data) {
            if (!data?.day || !data?.short) throw Error('Empty input')
            let newData = data
            newData.fileIndex = String(data.day).padStart(3, '0');
            const strs = String(data.short).split(':')
            newData.title = strs[0].trim();
            newData.intro = strs[1].trim();

            console.log(`CodePenTitle: #${newData.day} CSS Challenge / ${newData.title}`)

            return [{
                type: 'add',
                path: 'src/stories/@cssOnly/100days/{{fileIndex}}.mdx',
                templateFile: 'plop-templates/100days.hbs',
                data: newData
            }];
        }
    });
};
