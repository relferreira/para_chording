<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="para_chording">para_chording</h1>
<p><em><strong>beta version: 0.5 (Feb 21, 2022)</strong></em></p>
<p><em><strong>Find me on:</strong></em><br>
<em>Twitter: <a href="https://twitter.com/mysteryguitarm">Joe Penna [@MysteryGuitarM]</a><br>
Discord: <a href="https://discordapp.com/users/691634595627794433">Joe Penna (MysteryGuitarMan)#7614</a></em></p>
<pre><code>Listen, I'm not a coder/hacker either. I'm a screenwriter.

Thing is... these programs below are so easy to figure out
that I was able to code this entire chording solution by fumbling
through beginner example codes online.

(And asking for help a couple times. Many times. Thanks @CodyW, @hermo, @Dimentium, @kiinoda)</code></pre>
<p>Start by watching this video: <a href="http://youtube.com/mysteryguitarman"><s>How to start chording with Joe Penna</s></a>  (coming later)</p>
<pre><code>It explains what chording is, and walks you through this entire read_me.
</code></pre>
<h2 id="default-commands">Default Commands</h2>
<blockquote>
<p>First time here? Don’t worry about these yet.</p>
<p><code>⌃ control</code> + <code>⌥ option</code> + <code>⌘ command</code> + <code>i</code> ► add instant chord<br>
<code>⌃ control</code> + <code>⌥ option</code> + <code>⌘ command</code> + <code>-</code> ► open program folder<br>
<code>⌃ control</code> + <code>⌥ option</code> + <code>⌘ command</code> + <code>=</code> ► update karabiner chord_list</p>
</blockquote>
<h2 id="installation">Installation</h2>
<p><strong>Two programs you need to install:</strong></p>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> <strong>Karabiner Elements</strong>
<ul>
<li><a href="https://karabiner-elements.pqrs.org/"><em>download link</em></a></li>
<li><em>free / open source</em></li>
<li><em><a href="https://karabiner-elements.pqrs.org/docs/getting-started/installation/">detailed installation instructions</a>, if you need it</em></li>
</ul>
</li>
</ul>
<blockquote></blockquote>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> <strong>Keyboard Maestro</strong>
<ul>
<li><a href="https://download.keyboardmaestro.com/"><em>download link</em></a></li>
<li><em>technically a free trial, but you can use it indefinitely</em></li>
<li><em><a href="https://wiki.keyboardmaestro.com/manual/How_do_I">detailed installation instructions</a>, if you need it</em></li>
</ul>
</li>
</ul>
<h2 id="para_chording-installation">para_chording installation</h2>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> <strong>para_chording installation</strong>
<ul>
<li><em><a href="http://youtube.com/mysteryguitarman"><s>download link</s></a></em> [real link coming soon]*</li>
<li><em>These are the files I made to get you chording.</em></li>
<br>
</ul>
</li>
</ul>
<p><em><strong>Keyboard Maestro</strong></em></p>
<ul>
<li>
<p>run <strong>para_chording.kmmacros</strong><br>
<img src="https://i.imgur.com/Bcs5RyV.png" alt="run kmmacros" width="200"></p>
</li>
<li>
<p>right-click the <strong>para_chording</strong> folder in Keyboard Maestro, choose <em>Enable Macro Group</em>:<br>
<img src="https://i.imgur.com/oTOgpa3.png" alt="enable macro group" width="300"></p>
</li>
<li>
<p>run the <strong>installation</strong> macro:<br>
<img src="https://i.imgur.com/4ZEFXtH.png" alt="installation run" width="700"></p>
</li>
<li>
<p>That’s all you need with Keyboard Maestro.</p>
<br>
</li>
</ul>
<p><em><strong>Karabiner</strong></em></p>
<ul>
<li>Open <strong>Karabiner Preferences…</strong> in your taskbar:<br>
<img src="https://i.imgur.com/g6xasM2.png" alt="karabiner preferences" width="200"></li>
<li>Under <strong>Devices</strong>
<ul>
<li>Click the left-most checkmark on the keyboard you’d like to use.</li>
<li>Mine is called <em>Apple Internal Keyboard / Trackpad (Apple Inc.)</em></li>
</ul>
</li>
<li>Under <strong>Complex Modifications</strong>
<ul>
<li>Click <em>⊕ Add rule</em>.</li>
</ul>
</li>
<li>Next to <strong>para_chording</strong>
<ul>
<li>Click the needlessly small <em>Enable All</em> button.</li>
</ul>
</li>
<li>You’re done with installation!</li>
</ul>
<h2 id="lets-start-chording">Let’s Start Chording!</h2>
<p>Open any text editor. I recommend TextEdit for now.</p>
<p>First, type <strong><code>t</code></strong>. Then, type <strong><code>h</code></strong>. Then, type <strong><code>e</code></strong>. Then, add a <strong><code>space</code></strong>.</p>
<p>How slow.</p>
<p>Instead, try to mash <strong><code>the</code></strong> all together — that’s your <strong>chord</strong>.</p>
<p>You should have gotten <strong><code>the</code></strong> + <strong><code>space</code></strong> — that’s your <strong>output</strong>.</p>
<pre><code>By default, this program adds a space at the end of every output.
</code></pre>
<h2 id="other-ways-of-chording">Other Ways of Chording</h2>
<p>Now try to chord <strong><code>fj</code></strong> together.</p>
<p>You get the same output: <strong><code>the</code></strong> + <strong><code>space</code></strong> .</p>
<blockquote>
<ol>
<li>The letters of the <em><strong>chord</strong></em> don’t have to match the letters of the <em><strong>output</strong></em>.</li>
<li>You can have multiple <em><strong>chords</strong></em> with the same <em><strong>output</strong></em> (but each chord can only have one output).</li>
</ol>
</blockquote>
<p><strong><code>fj</code></strong> for <strong><code>the</code></strong> seems like an odd choice, but consider the following:</p>
<ul>
<li><em>The</em> word <strong>the</strong> is <em>the</em> most common word in <em>the</em> English language.</li>
<li>It’s probably <em>the</em> word you type <em>the</em> most.</li>
<li><em>The</em> keyboard in front of you probably has two easy-to-find nibs on <em>the</em> <strong><code>F</code></strong> and <em>the</em> <strong><code>J</code></strong> keys.</li>
<li><em>The</em> index fingers usually rest on those two keys.</li>
<li><em>The</em> term <em>“semantic satiation”</em> describes how you might be feeling about <em>the</em> word <em>“the”</em>.</li>
</ul>
<p><strong><u>Repeats and Shifts</u></strong><br>
Try  chording <strong><code>fj</code></strong> repeatedly. You should get <code>the the the</code>.</p>
<p>If you press-and-hold <strong><code>fj</code></strong>, you get <code>the•••••</code> (where <code>•</code> represents a blank space).</p>
<blockquote>
<p>By default, only the last letter of a chord will repeat, which will usually be a space.</p>
</blockquote>
<p>Try holding <strong><code>shift</code></strong> down, then chord <strong><code>fj</code></strong>.<br>
You get <code>The</code>. Repeatedly, you get <code>The The The</code>.</p>
<blockquote>
<p>By default, I made it so that only the first letter is capitalized.<br>
We’ll talk about how to capitalize the entire output in a bit.</p>
</blockquote>
<p><strong>Long Chords</strong><br>
Back in your text editor, move your fingers around until you press <strong><code>thom</code></strong> altogether. You get:</p>
<pre><code>To Whom It May Concern,
►
</code></pre>
<p>Note the lack of space added.</p>
<p>Now chord <strong><code>obed</code></strong>, which will output:</p>
<pre><code>I have the honor to be your obedient servant,

A.Ham
</code></pre>
<p>Also, note that you don’t have to hold a long chord while it types.<br>
For normal chording, you shouldn’t run into an issue with how long it takes to type.</p>
<blockquote>
<p><s>Still, if you want to have the text show up immediately, you can enable <strong>“paste mode”</strong> in this program’s preferences — with the caveat that you’ll lose whatever you last copied after every chord.</s><br>
<em>This has not yet been implemented.</em></p>
</blockquote>
<h2 id="adding-your-own-chords">Adding Your Own Chords</h2>
<p>Try this keystroke <em>(doesn’t need to be chorded)</em>:</p>
<blockquote>
<p><code>⌃ control</code> + <code>⌥ option</code> + <code>⌘ command</code> + <code>i</code></p>
</blockquote>
<p>This opens up:<br>
<img src="https://i.imgur.com/GQFhYAu.png" alt="instant chording" width="400"></p>
<p><strong>Before you add any chords…</strong></p>
<ul>
<li>
<p><strong>Numbers</strong>, <strong>lowercase</strong> letters, and <strong>uppercase</strong> letters are allowed.</p>
</li>
<li>
<p>You <strong>can’t use commas</strong> directly.</p>
<ul>
<li>You need to escape them with a <code>\backslash\</code></li>
<li><code>Evening\, ladies</code> will get you what you want, at least chording-wise.</li>
<li><code>Evening, ladies</code> will break everything.</li>
</ul>
</li>
<li>
<p>You can <strong>only use the symbols</strong> <code>! @ # $ % ^ &amp; * ( ) - _ = +</code> <strong>and</strong> <code>&lt; . &gt; / ? ; : ' "</code></p>
<ul>
<li>No vertical bars. <code>|shift+backslash|</code></li>
<li>No brackets. <code>[]{}</code></li>
<li>꧁ 𝕹𝖔 𝖜𝖊𝖎𝖗𝖉 𝖈𝖍𝖆𝖗𝖆𝖈𝖙𝖊𝖗𝖘 𝖔𝖗 𝖊𝖒𝖔𝖏𝖎𝖘 ꧂</li>
</ul>
</li>
</ul>
<p>I’m not a good enough coder to stop you from breaking your chord list.<br>
So, just try to stick to letters and numbers the simple symbols above.</p>
<p>Try adding one now!<br>
I did:</p>
<pre><code>chord: luv
output: love
</code></pre>
<blockquote>
<p>If you don’t want a space at the end of your output, add a # symbol to the end of your chord.<br>
<code>output: love</code> will get you <code>love</code>+<code>space</code>.<br>
<code>output: love#</code> will get you <code>love</code>.</p>
</blockquote>
<h2 id="more-advanced-concepts">More Advanced Concepts</h2>
<p>If you wanna add lots of chords more easily, or to change / delete any chords, type:<br>
<code>⌃ control</code> + <code>⌥ option</code> + <code>⌘ command</code> + <code>- (hyphen)</code></p>
<p>This opens your program folder in Finder.</p>
<ul>
<li><strong>chord_lists</strong>
<ul>
<li>lots of .txt that mesh together to create your chord library.</li>
</ul>
</li>
</ul>
<blockquote>
<p>More info about these below.</p>
</blockquote>
<ul>
<li><strong>chord_lists backups</strong>
<ul>
<li>backups of the <em>chord_lists</em> are made every time you:
<ul>
<li>add an instant chord.</li>
<li>run the <em>manual chord_list update</em> command.</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p>If you’re changing your files often, a new backup of all folders is only made every hour.</p>
</blockquote>
<ul>
<li><strong>documentation</strong>
<ul>
<li>links to this document, and a document for developers.</li>
<li>please, developers — read it! I need help!</li>
</ul>
</li>
</ul>
<p><strong>chord_list directory</strong><br>
Open it up.</p>
<p>You’ve got:</p>
<ul>
<li><strong>instant_chords.txt</strong>
<ul>
<li>a list of chords added, with date and time as comments</li>
</ul>
</li>
</ul>
<blockquote>
<pre><code>instant — February 21, 2022 – 2:57 PM
chord,output
</code></pre>
</blockquote>
<ul>
<li><strong>read_me examples.txt</strong>
<ul>
<li>The examples from this read_me.</li>
<li>Feel free to delete this after you’re done reading through this document.</li>
</ul>
</li>
<li><strong>100 most common english words.txt</strong>
<ul>
<li>A bunch of chords to get you started.</li>
<li>Note the lack of two-letter words.</li>
</ul>
</li>
<li><strong>common two-letter words.txt</strong>
<ul>
<li>chords for words like <code>be</code>, <code>to</code>,</li>
<li>Note the lack of non-two-letter words.</li>
</ul>
</li>
</ul>
<h2 id="file-format">File Format</h2>
<p>This program’s expecting text files in the <code>chord_list</code> directory with the following pattern:</p>
<pre><code>// title is a must
chord,output
chord,output
chord,output//comments immediately after output are supported

chord ,output//you would have to chord spacebar here
chord, output//your output would have an extra space here

chord,output   //this would add extra spaces to your output

// empty lines allowed
	    //comments not at the beginning of a line might break things
/*
comment blocks
are unsupported
*/

very long chords are,not useful
chords without outputs will definitely break things
</code></pre>
<p>When you’re done changing your .txt files around, you can update Karabiner with:<br>
<code>⌃ control</code> + <code>⌥ option</code> + <code>⌘ command</code> + <code>= (equal sign)</code></p>
<h2 id="modifier-keys">Modifier Keys</h2>
<p>I coded a few extra keys for you.</p>
<p><strong>Modifiers For Chords and Outputs</strong></p>
<blockquote>
<p>backspace —  ◄ but will be changed to :backspace:<br>
enter — ▼ but will be changed to :enter:<br>
tab — ► but will be changed to :tab:</p>
</blockquote>
<p><em><strong>Examples:</strong></em></p>
<pre><code>abon,abandon
ing,:backspace:ing
</code></pre>
<p>chording <strong><code>abon</code></strong> then <strong><code>ing</code></strong> outputs:<br>
<code>abandon+space</code> then <code>backspace+ing</code><br>
<strong><code>abandoning</code></strong></p>
<pre><code>=-:backspace:,hunter2
</code></pre>
<p>chording the three keys on the top of your keyboard (<code>hyphen</code> <code>equalsign</code> <code>delete</code> ) would output<br>
<strong><code>hunter2</code></strong>, which might be your password or something…</p>
<p>Lastly, the examples from earlier:</p>
<pre><code>thm,To Whom It May Concern\,:enter::enter:#
obed,I have the honor to be your obedient servant\,:enter::enter:A.Ham
</code></pre>
<p>Your output must be an unbroken line.</p>
<p><strong>Modifiers For Chords Only</strong><br>
These symbols can ONLY be part of your chord:</p>
<blockquote>
<p>^ <code>:left_control:</code><br>
^ <code>:right_control:</code></p>
<p>⌥	<code>:left_option:</code><br>
⌥<code>:right_option:</code></p>
<p>⌘	<code>:left_command:</code><br>
⌘ <code>:right_command:</code></p>
</blockquote>
<p>They can be useful to differentiate chords for anagrammatic words. Remember that you could also use the spacebar as part of your chord:</p>
<pre><code>	the,the
	the:right_option:,Theodore
	the ,The Space Between Us//note the space before the comma
</code></pre>
<h2 id="final-remarks">Final Remarks</h2>
<p>To be added.</p>
<p><strong>Support The Little Guys</strong><br>
If you get some good use out of this program:</p>
<ul>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> buy the <strong>Karabiner</strong> peeps <a href="https:karabiner-elements.pqrs.org/docs/pricing/">a nice coffee</a></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> toss the <strong>Keyboard Maestro</strong> folks <a href="https:www.keyboardmaestro.com/main/#Pricing">a few bucks</a></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" disabled=""> check out my <a href="http:paypal.me/joepenna">PayPal page</a></li>
</ul>
<blockquote>
<p>Written with <a href="https:stackedit.io/">StackEdit</a>.</p>
</blockquote>
</div>
</body>

</html>
