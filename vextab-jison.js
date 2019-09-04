/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,7],$V2=[1,8],$V3=[1,9],$V4=[5,11,13,14,15],$V5=[5,11,13,14,15,17,19,21],$V6=[2,17],$V7=[1,14],$V8=[5,11,13,14,15,17,19,21,22],$V9=[1,18],$Va=[1,19],$Vb=[1,20],$Vc=[1,21],$Vd=[1,43],$Ve=[1,32],$Vf=[1,33],$Vg=[1,42],$Vh=[1,41],$Vi=[1,39],$Vj=[1,48],$Vk=[1,55],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,56],$Vr=[1,44],$Vs=[1,45],$Vt=[1,46],$Vu=[1,47],$Vv=[1,57],$Vw=[5,11,13,14,15,17,19,21,25],$Vx=[5,11,13,14,15,17,19,21,23,31,32,37,38,45,48,57,61,62,63,64,65,66,70,71,73,75,76],$Vy=[2,79],$Vz=[1,67],$VA=[1,64],$VB=[1,65],$VC=[1,66],$VD=[1,73],$VE=[1,74],$VF=[1,78],$VG=[1,79],$VH=[1,80],$VI=[1,81],$VJ=[41,57,59,61,62,63,64,65,66,67,68,69],$VK=[38,45,48,76],$VL=[41,48,57,59,61,62,63,64,65,66,67,68,69,81],$VM=[5,11,13,14,15,17,19,21,23,31,32,37,38,41,45,48,57,61,62,63,64,65,66,70,71,73,75,76],$VN=[1,101],$VO=[44,46],$VP=[2,63],$VQ=[1,106],$VR=[5,11,13,14,15,17,19,21,23,31,32,37,38,45,48,57,59,61,62,63,64,65,66,70,71,73,75,76],$VS=[5,11,13,14,15,17,19,21,23,31,32,37,38,45,48,57,59,60,61,62,63,64,65,66,70,71,73,75,76],$VT=[25,71],$VU=[41,48,57,59,61,62,63,64,65,66,67,68,69],$VV=[5,11,13,14,15,17,19,21,23,31,32,37,38,44,45,46,48,57,61,62,63,64,65,66,70,71,73,75,76];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"e":3,"maybe_vextab":4,"EOF":5,"vextab":6,"stave":7,"voice":8,"maybe_options":9,"stave_data":10,"OPTIONS":11,"options":12,"TABSTAVE":13,"STAVE":14,"VOICE":15,"stave_additions":16,"TEXT":17,"text":18,"NOTES":19,"notes":20,"SLUR":21,"WORD":22,"=":23,"STR":24,",":25,"lingo":26,"line":27,"chord":28,"time":29,"bar":30,"[":31,"]":32,"tuplets":33,"annotations":34,"command":35,"rest":36,"|":37,":":38,"frets":39,"maybe_decorator":40,"/":41,"string":42,"chord_line":43,".":44,"(":45,")":46,"articulation":47,"NUMBER":48,"abc":49,"_":50,"timed_fret":51,"time_values":52,"maybe_dot":53,"time_unit":54,"maybe_slash":55,"w":56,"h":57,"q":58,"d":59,"S":60,"-":61,"s":62,"t":63,"T":64,"b":65,"p":66,"v":67,"V":68,"u":69,"^":70,"$":71,"annotation_words":72,"!":73,"COMMAND":74,"#":75,"ABC":76,"abc_accidental":77,"accidental_type":78,"@":79,"n":80,"~":81,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"OPTIONS",13:"TABSTAVE",14:"STAVE",15:"VOICE",17:"TEXT",19:"NOTES",21:"SLUR",22:"WORD",23:"=",24:"STR",25:",",31:"[",32:"]",37:"|",38:":",41:"/",44:".",45:"(",46:")",48:"NUMBER",50:"_",56:"w",57:"h",58:"q",59:"d",60:"S",61:"-",62:"s",63:"t",64:"T",65:"b",66:"p",67:"v",68:"V",69:"u",70:"^",71:"$",73:"!",74:"COMMAND",75:"#",76:"ABC",79:"@",80:"n",81:"~"},
productions_: [0,[3,2],[4,0],[4,1],[6,1],[6,2],[7,3],[7,2],[7,2],[8,1],[8,1],[8,1],[10,1],[10,2],[16,2],[16,2],[16,2],[9,0],[9,1],[12,3],[12,4],[18,1],[18,3],[20,1],[20,2],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[30,1],[30,3],[30,3],[30,3],[30,3],[30,3],[27,4],[43,1],[43,3],[28,4],[28,5],[39,1],[39,1],[39,4],[39,2],[39,4],[51,5],[51,1],[51,5],[51,8],[51,1],[51,4],[29,3],[52,2],[54,1],[54,1],[54,1],[54,1],[53,0],[53,1],[55,0],[55,1],[42,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[40,1],[40,1],[40,1],[40,1],[40,0],[33,3],[33,5],[34,3],[72,1],[72,3],[35,3],[36,2],[36,3],[36,4],[49,3],[77,1],[77,2],[77,1],[77,2],[77,1],[77,0],[78,0],[78,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

      return $$[$0-1];
    
break;
case 2: case 17: case 79:
 this.$ = null 
break;
case 3: case 12: case 18: case 23: case 25: case 26: case 27: case 42: case 59: case 60: case 61: case 62: case 67:
 this.$ = $$[$0] 
break;
case 4: case 83:
 this.$ = [$$[$0]] 
break;
case 5:
 this.$ = [].concat($$[$0-1], $$[$0]) 
break;
case 6:
 this.$ = {
        element: $$[$0-2],
        options: $$[$0-1],
        notes: $$[$0].notes,
        text: $$[$0].text,
        _l: _$[$0-2].first_line,
        _c: _$[$0-2].first_column
      }
    
break;
case 7:
 this.$ = {
        element: $$[$0-1],
        options: $$[$0],
        _l: _$[$0-1].first_line,
        _c: _$[$0-1].first_column
      }
    
break;
case 8:

      this.$ = {
        element: "options",
        params: $$[$0],
        _l: _$[$0-1].first_line,
        _c: _$[$0-1].first_column
      }
    
break;
case 13:

      var text = [].concat($$[$0-1].text, $$[$0].text);
      var notes = [].concat($$[$0-1].notes, $$[$0].notes);
      var slurs = [].concat($$[$0-1].slurs, $$[$0].slurs)
      this.$ = {text: text, notes: notes, slurs: slurs};
    
break;
case 14:
this.$ = {text: $$[$0], notes: [], slurs: []}
break;
case 15:
this.$ = {notes: $$[$0], text: [], slurs: []}
break;
case 16:
this.$ = {slurs: $$[$0], notes: [], text: []}
break;
case 19:
 this.$ = [{
        key: $$[$0-2],
        value: $$[$0],
        _l: _$[$0-2].first_line,
        _c: _$[$0-2].first_column
      }]
    
break;
case 20:
 this.$ = [].concat($$[$0-3], [{
        key: $$[$0-2],
        value: $$[$0],
        _l: _$[$0-2].first_line,
        _c: _$[$0-2].first_column
        }])
    
break;
case 21:
 this.$ = [{text: $$[$0], _l: _$[$0].first_line, _c: _$[$0].first_column}] 
break;
case 22:
 this.$ = [].concat($$[$0-2], {text: $$[$0], _l: _$[$0].first_line, _c: _$[$0].first_column}) 
break;
case 24:
 this.$ = [].concat($$[$0-1], $$[$0])  
break;
case 28:
 this.$ = [{
        command: "bar",
        type: $$[$0],
        _l: _$[$0].first_line,
        _c: _$[$0].first_column
        }]
    
break;
case 29:
 this.$ = [{
        command: "open_beam",
        _l: _$[$0].first_line,
        _c: _$[$0].first_column
      }]
    
break;
case 30:
 this.$ = [{
        command: "close_beam",
        _l: _$[$0].first_line,
        _c: _$[$0].first_column
      }]
    
break;
case 31:
 this.$ = [{
        command: "tuplet",
        params: $$[$0],
        _l: _$[$0].first_line,
        _c: _$[$0].first_column
      }]
    
break;
case 32:
 this.$ = [{
        command: "annotations",
        params: $$[$0],
        _l: _$[$0].first_line,
        _c: _$[$0].first_column
      }]
    
break;
case 33:
 this.$ = [{
        command: "command",
        params: $$[$0],
        _l: _$[$0].first_line,
        _c: _$[$0].first_column
      }]
    
break;
case 34:

    this.$ = [{
        command: "rest",
        params: $$[$0]
      }]
    
break;
case 35:
 this.$ = 'single' 
break;
case 36:
 this.$ = 'double' 
break;
case 37:
 this.$ = 'end' 
break;
case 38:
 this.$ = 'repeat-end' 
break;
case 39:
 this.$ = 'repeat-begin' 
break;
case 40:
 this.$ = 'repeat-both' 
break;
case 41:

      _.extend(_.last($$[$0-3]), {decorator: $$[$0-2]})
      _.each($$[$0-3], function(fret) { fret['string'] = $$[$0] })
      this.$ = $$[$0-3]
    
break;
case 43: case 84:
 this.$ = [].concat($$[$0-2], $$[$0]) 
break;
case 44:
 this.$ = [{chord: $$[$0-2], decorator: $$[$0]}] 
break;
case 45:
 this.$ = [{chord: $$[$0-2], articulation: $$[$0-4], decorator: $$[$0]}] 
break;
case 46:
 this.$ = [{
        fret: $$[$0],
        _l: _$[$0].first_line,
        _c: _$[$0].first_column}]
    
break;
case 47:
 this.$ = [{abc: $$[$0], _l: _$[$0].first_line, _c: _$[$0].first_column}]
break;
case 48:
 this.$ = [{abc: $$[$0-3], octave: $$[$0-2],
             fret: $$[$0], _l: _$[$0-3].first_line, _c: _$[$0-3].first_column}]
break;
case 49:
 this.$ = [_.extend($$[$0], {articulation: $$[$0-1]})] 
break;
case 50:

      _.extend(_.last($$[$0-3]), {decorator: $$[$0-2]})
      _.extend($$[$0], {articulation: $$[$0-1]})
      $$[$0-3].push($$[$0])
      this.$ = $$[$0-3]
    
break;
case 51:
 this.$ = {
      time: $$[$0-3], dot: $$[$0-2], fret: $$[$0],
      _l: _$[$0-4].first_line, _c: _$[$0-4].first_column}
break;
case 52:
 this.$ = {fret: $$[$0], _l: _$[$0].first_line, _c: _$[$0].first_column} 
break;
case 53:
 this.$ = {time: $$[$0-3], dot: $$[$0-2], abc: $$[$0]}
break;
case 54:
 this.$ = {time: $$[$0-6], dot: $$[$0-5], abc: $$[$0-3], octave: $$[$0-2], fret: $$[$0]}
break;
case 55:
 this.$ = {abc: $$[$0], _l: _$[$0].first_line, _c: _$[$0].first_column} 
break;
case 56:
 this.$ = {abc: $$[$0-3], octave: $$[$0-2],
            fret: $$[$0], _l: _$[$0-3].first_line, _c: _$[$0-3].first_column} 
break;
case 57:
 this.$ = {time: $$[$0-1], dot: $$[$0]} 
break;
case 58:
 this.$ = $$[$0-1] + $$[$0] 
break;
case 63:
 this.$ = false 
break;
case 64:
 this.$ = true 
break;
case 65:
 this.$ = '' 
break;
case 66: case 69:
 this.$ = 's' 
break;
case 68:
 this.$ = '-' 
break;
case 70:
 this.$ = 't' 
break;
case 71:
 this.$ = 'T' 
break;
case 72:
 this.$ = 'b' 
break;
case 73:
 this.$ = 'h' 
break;
case 74:
 this.$ = 'p' 
break;
case 75:
 this.$ = 'v' 
break;
case 76:
 this.$ = 'V' 
break;
case 77:
 this.$ = 'u' 
break;
case 78:
 this.$ = 'd' 
break;
case 80:
 this.$ = {tuplet: $$[$0-1]} 
break;
case 81:
 this.$ = {tuplet: $$[$0-3], notes: $$[$0-1]} 
break;
case 82: case 85:
 this.$ = $$[$0-1] 
break;
case 86:
 this.$ = {position: 0} 
break;
case 87:
 this.$ = {position: $$[$0-1]} 
break;
case 88:
 this.$ = {position: $$[$0-1] * -1} 
break;
case 89:
 this.$ = {key: $$[$0-2], accidental: $$[$0-1], accidental_type: $$[$0]} 
break;
case 90:
 this.$ = "#" 
break;
case 91:
 this.$ = "##" 
break;
case 92:
 this.$ = "b" 
break;
case 93:
 this.$ = "bb" 
break;
case 94:
 this.$ = "n" 
break;
case 96:
 this.$ = null; 
break;
case 97:
 this.$ = "c" 
break;
}
},
table: [{3:1,4:2,5:[2,2],6:3,7:4,8:5,11:$V0,13:$V1,14:$V2,15:$V3},{1:[3]},{5:[1,10]},{5:[2,3],7:11,8:5,11:$V0,13:$V1,14:$V2,15:$V3},o($V4,[2,4]),o($V5,$V6,{9:12,12:13,22:$V7}),{12:15,22:$V7},o($V8,[2,9]),o($V8,[2,10]),o($V8,[2,11]),{1:[2,1]},o($V4,[2,5]),o($V4,[2,7],{10:16,16:17,17:$V9,19:$Va,21:$Vb}),o($V5,[2,18],{22:$Vc}),{23:[1,22]},o($V4,[2,8],{22:$Vc}),o($V4,[2,6],{16:23,17:$V9,19:$Va,21:$Vb}),o($V5,[2,12]),{18:24,24:[1,25]},{20:26,23:$Vd,26:27,27:28,28:29,29:30,30:31,31:$Ve,32:$Vf,33:34,34:35,35:36,36:37,37:$Vg,38:$Vh,39:38,45:$Vi,47:40,48:$Vj,49:49,57:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo,65:$Vp,66:$Vq,70:$Vr,71:$Vs,73:$Vt,75:$Vu,76:$Vv},o($V5,$V6,{12:13,9:58,22:$V7}),{23:[1,59]},{22:[1,60]},o($V5,[2,13]),o($V5,[2,14],{25:[1,61]}),o($Vw,[2,21]),o($V5,[2,15],{27:28,28:29,29:30,30:31,33:34,34:35,35:36,36:37,39:38,47:40,49:49,26:62,23:$Vd,31:$Ve,32:$Vf,37:$Vg,38:$Vh,45:$Vi,48:$Vj,57:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo,65:$Vp,66:$Vq,70:$Vr,71:$Vs,73:$Vt,75:$Vu,76:$Vv}),o($Vx,[2,23]),o($Vx,[2,25]),o($Vx,[2,26]),o($Vx,[2,27]),o($Vx,[2,28]),o($Vx,[2,29]),o($Vx,[2,30]),o($Vx,[2,31]),o($Vx,[2,32]),o($Vx,[2,33]),o($Vx,[2,34]),o([41,57,61,62,63,64,65,66],$Vy,{40:63,59:$Vz,67:$VA,68:$VB,69:$VC}),{27:69,39:38,43:68,47:70,48:$Vj,49:49,57:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo,65:$Vp,66:$Vq,76:$Vv},{38:$VD,45:[1,71],48:$VE,49:75,51:72,76:$Vv},{48:$VF,52:76,54:77,56:$VG,57:$VH,58:$VI},o($Vx,[2,35]),{37:[1,82],38:[1,83]},{48:[1,84]},{22:[1,86],72:85},{74:[1,87]},{48:[1,89],61:[1,90],75:[1,88]},o($VJ,[2,46]),o($VJ,[2,47],{48:[1,91]}),o($VK,[2,68]),o($VK,[2,69]),o($VK,[2,70]),o($VK,[2,71]),o($VK,[2,72]),o($VK,[2,73]),o($VK,[2,74]),o($VL,[2,95],{77:92,75:[1,93],79:[1,94],80:[1,95]}),o($V5,[2,16]),{22:[1,96]},o($V8,[2,19]),{24:[1,97]},o($Vx,[2,24]),{41:[1,98],47:99,57:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo,65:$Vp,66:$Vq},o($VM,[2,75]),o($VM,[2,76]),o($VM,[2,77]),o($VM,[2,78]),{44:$VN,46:[1,100]},o($VO,[2,42]),{38:$VD,48:$VE,49:75,51:72,76:$Vv},{27:69,39:38,43:102,47:70,48:$Vj,49:49,57:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo,65:$Vp,66:$Vq,76:$Vv},o($VJ,[2,49]),{48:$VF,52:103,54:77,56:$VG,57:$VH,58:$VI},o($VJ,[2,52]),o($VJ,[2,55],{48:[1,104]}),o($Vx,$VP,{53:105,59:$VQ}),o($VR,[2,65],{55:107,60:[1,108]}),o($VS,[2,59]),o($VS,[2,60]),o($VS,[2,61]),o($VS,[2,62]),{23:[1,110],37:[1,109],38:[1,111]},{37:[1,112],38:[1,113]},{25:[1,115],70:[1,114]},{25:[1,117],71:[1,116]},o($VT,[2,83]),{73:[1,118]},o($Vx,[2,86]),{75:[1,119]},{48:[1,120]},{50:[1,121]},o($VU,[2,96],{78:122,81:[1,123]}),o($VL,[2,90],{75:[1,124]}),o($VL,[2,92],{79:[1,125]}),o($VL,[2,94]),o($V8,[2,20]),o($Vw,[2,22]),{42:126,48:[1,127]},{38:$VD,48:$VE,49:75,51:128,76:$Vv},o($Vx,$Vy,{40:129,59:$Vz,67:$VA,68:$VB,69:$VC}),{27:130,39:38,47:70,48:$Vj,49:49,57:$Vk,61:$Vl,62:$Vm,63:$Vn,64:$Vo,65:$Vp,66:$Vq,76:$Vv},{44:$VN,46:[1,131]},{38:$VP,53:132,59:$VQ},{50:[1,133]},o($Vx,[2,57]),o($Vx,[2,64]),o($VR,[2,58]),o($VR,[2,66]),o($Vx,[2,36]),o($Vx,[2,37]),o($Vx,[2,39]),o($Vx,[2,38]),o($Vx,[2,40]),o($Vx,[2,80]),{48:[1,134]},o($Vx,[2,82]),{22:[1,135]},o($Vx,[2,85]),o($Vx,[2,87]),{75:[1,136]},{48:[1,137]},o($VU,[2,89]),o($VU,[2,97]),o($VL,[2,91]),o($VL,[2,93]),o($VV,[2,41]),o($VV,[2,67]),o($VJ,[2,50]),o($Vx,[2,44]),o($VO,[2,43]),o($Vx,$Vy,{40:138,59:$Vz,67:$VA,68:$VB,69:$VC}),{38:[1,139]},{48:[1,140]},{70:[1,141]},o($VT,[2,84]),o($Vx,[2,88]),o($VJ,[2,48]),o($Vx,[2,45]),{48:[1,142],49:143,76:$Vv},o($VJ,[2,56]),o($Vx,[2,81]),o($VJ,[2,51]),o($VJ,[2,53],{48:[1,144]}),{50:[1,145]},{48:[1,146]},o($VJ,[2,54])],
defaultActions: {10:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  var _ = require("lodash");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: this.begin('notes'); return 19; 
break;
case 1: this.begin('options'); return 13; 
break;
case 2: this.begin('options'); return 14; 
break;
case 3: this.begin('options'); return 15; 
break;
case 4: this.begin('options'); return 11; 
break;
case 5: this.begin('text'); return 17; 
break;
case 6: this.begin('options'); return 21; 
break;
case 7:return 22
break;
case 8: this.begin('annotations'); return "$" 
break;
case 9: this.begin('notes'); return "$" 
break;
case 10:return 22
break;
case 11: this.begin('command'); return "!" 
break;
case 12: this.begin('notes'); return "!" 
break;
case 13:return 74
break;
case 14:return 24
break;
case 15:return 41
break;
case 16:return '+'
break;
case 17:return 38
break;
case 18:return 23
break;
case 19:return 45
break;
case 20:return 46
break;
case 21:return 31
break;
case 22:return 32
break;
case 23:return 70
break;
case 24:return 25
break;
case 25:return 37
break;
case 26:return 44
break;
case 27:return 75
break;
case 28:return 79
break;
case 29:return 65
break;
case 30:return 62
break;
case 31:return 57
break;
case 32:return 66
break;
case 33:return 63
break;
case 34:return 64
break;
case 35:return 61
break;
case 36:return 50
break;
case 37:return 67
break;
case 38:return 68
break;
case 39:return 69
break;
case 40:return 59
break;
case 41:return 48
break;
case 42:return 58
break;
case 43:return 56
break;
case 44:return 57
break;
case 45:return 59
break;
case 46:return 60
break;
case 47:return 76
break;
case 48:return 80
break;
case 49:return 81
break;
case 50: this.begin('INITIAL'); 
break;
case 51:/* skip whitespace */
break;
case 52:return 5
break;
case 53:return 'INVALID'
break;
}
},
rules: [/^(?:notes\b)/,/^(?:tabstave\b)/,/^(?:stave\b)/,/^(?:voice\b)/,/^(?:options\b)/,/^(?:text\b)/,/^(?:slur\b)/,/^(?:[^\s=]+)/,/^(?:[$])/,/^(?:[$])/,/^(?:[^,$]+)/,/^(?:[!])/,/^(?:[!])/,/^(?:[^!]+)/,/^(?:[^,\r\n]+)/,/^(?:\/)/,/^(?:\+)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\^)/,/^(?:,)/,/^(?:\|)/,/^(?:\.)/,/^(?:#)/,/^(?:@)/,/^(?:[b])/,/^(?:[s])/,/^(?:[h])/,/^(?:[p])/,/^(?:[t])/,/^(?:[T])/,/^(?:[-])/,/^(?:[_])/,/^(?:[v])/,/^(?:[V])/,/^(?:[u])/,/^(?:[d])/,/^(?:[0-9]+)/,/^(?:[q])/,/^(?:[w])/,/^(?:[h])/,/^(?:[d])/,/^(?:[S])/,/^(?:[A-GXLR])/,/^(?:[n])/,/^(?:[~])/,/^(?:[\r\n]+)/,/^(?:\s+)/,/^(?:$)/,/^(?:.)/],
conditions: {"notes":{"rules":[8,11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"inclusive":true},"text":{"rules":[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,41,42,43,44,45,50,51,52,53],"inclusive":true},"slur":{"rules":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],"inclusive":true},"annotations":{"rules":[9,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],"inclusive":true},"options":{"rules":[7,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],"inclusive":true},"command":{"rules":[12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],"inclusive":true},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}