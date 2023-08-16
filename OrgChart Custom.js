function(instance, properties, context) {


    
    $('.mask.hidden').remove();


    if (false) {

        //Enable scrolling inside div
        $(`${'#' + instance.data.divName}`).parent().css('overflow-x', 'auto');
        $(`${'#' + instance.data.divName}`).parent().css('overflow-y', 'auto');

    } else{

        //Disable scrolling inside div
        $(`${'#' + instance.data.divName}`).parent().css('overflow', 'none');        
    }
    


    if (properties.direction == "Top to bottom"){
        var direction = 't2b'
        }
    if (properties.direction == "Bottom to top"){
        var direction = 'b2t'
        }
    if (properties.direction == "Right to left"){
        var direction = 'r2l'
        }
    if (properties.direction == "Left to right"){
        var direction = 'l2r'
        }


    var nameArray = properties.data_source.get( 0, properties.data_source.length()).map( x => x.get(properties.name))
    var titleArray = properties.data_source.get( 0, properties.data_source.length()).map( x => x.get(properties.title))
    var parentArray = properties.data_source.get( 0, properties.data_source.length()).map( x => x.get(properties.parent))
    var idArray = properties.data_source.get( 0, properties.data_source.length()).map( x => x.get('_id'))


    var dataObject
    var completeObjectArray = []


    idArray.forEach((val, i) => {

        completeObjectArray.push({
            'name': nameArray[i],
            'title': titleArray[i],
            'id': val,
            'parent': parentArray[i]
        }) 
    })


    //Group objects by parent
    var result = completeObjectArray.reduce(function (r, a) {
        r[a.parent] = r[a.parent] || [];
        r[a.parent].push(a);
        return r;
    }, Object.create(null));


    dataObject = {
        'name': result[null][0].name,
        'title': result[null][0].title,
        'id': result[null][0].id,
        'children': []
    }  


    dataObject['children'] = result[dataObject.id]


    if (dataObject['children'] !== undefined) {


        // level 2 children
        dataObject['children'].forEach((val,i) => {

            if (result[val.id] !== undefined) {

                dataObject['children'][i]['children'] = []

                result[val.id].forEach((value,index) => {

                    dataObject['children'][i]['children'].push(value)
                }) 
            }   


            // level 3 children
            if(val['children'] !== undefined) {

                val['children'].forEach((val2, i2) => {

                    dataObject['children'][i]['children'][i2]['children'] = []

                    if (result[val2.id] !== undefined){

                        result[val2.id].forEach((value,index) => {

                            dataObject['children'][i]['children'][i2]['children'].push(value)
                        })  
                    } 


                    // level 4 children
                    if(val2['children'] !== undefined) {

                        val2['children'].forEach((val3, i3) => {

                            dataObject['children'][i]['children'][i2]['children'][i3]['children'] = []

                            if (result[val3.id] !== undefined){

                                result[val3.id].forEach((value,index) => {

                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'].push(value)
                                })  
                            } 


                            // level 5 children
                            if(val3['children'] !== undefined) {

                                val3['children'].forEach((val4, i4) => {

                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'] = []

                                    if (result[val4.id] !== undefined){

                                        result[val4.id].forEach((value,index) => {

                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'].push(value)
                                        })  
                                    } 


                                    // level 6 children
                                    if(val4['children'] !== undefined) {

                                        val4['children'].forEach((val5, i5) => {

                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'] = []

                                            if (result[val5.id] !== undefined){

                                                result[val5.id].forEach((value,index) => {

                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'].push(value)
                                                })  
                                            } 


                                            // level 7 children
                                            if(val5['children'] !== undefined) {

                                                val5['children'].forEach((val6, i6) => {

                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'] = []

                                                    if (result[val6.id] !== undefined){

                                                        result[val6.id].forEach((value,index) => {

                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'].push(value)
                                                        })  
                                                    } 


                                                    // level 8 children
                                                    if(val6['children'] !== undefined) {

                                                        val6['children'].forEach((val7, i7) => {

                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'] = []

                                                            if (result[val7.id] !== undefined){

                                                                result[val7.id].forEach((value,index) => {

                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'].push(value)
                                                                })  
                                                            } 


                                                            // level 9 children
                                                            if(val7['children'] !== undefined) {

                                                                val7['children'].forEach((val8, i8) => {

                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'] = []


                                                                    if (result[val8.id] !== undefined){

                                                                        result[val8.id].forEach((value,index) => {

                                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'].push(value)
                                                                        })  
                                                                    } 




                                                                    // level 10 children
                                                                    if(val8['children'] !== undefined) {

                                                                        val8['children'].forEach((val9, i9) => {

                                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'] = []


                                                                            if (result[val9.id] !== undefined){

                                                                                result[val9.id].forEach((value,index) => {

                                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'].push(value)
                                                                                })  
                                                                            }                                                                 



                                                                            // level 11 children
                                                                            if(val9['children'] !== undefined) {

                                                                                val9['children'].forEach((val10, i10) => {

                                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'] = []


                                                                                    if (result[val10.id] !== undefined){

                                                                                        result[val10.id].forEach((value,index) => {

                                                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'].push(value)
                                                                                        })  
                                                                                    }                                                                 



                                                                                    // level 12 children
                                                                                    if(val10['children'] !== undefined) {

                                                                                        val10['children'].forEach((val11, i11) => {

                                                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'][i11]['children'] = []


                                                                                            if (result[val11.id] !== undefined){

                                                                                                result[val11.id].forEach((value,index) => {

                                                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'][i11]['children'].push(value)
                                                                                                })  
                                                                                            }                                                                 



                                                                                            // level 13 children
                                                                                            if(val11['children'] !== undefined) {

                                                                                                val11['children'].forEach((val12, i12) => {

                                                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'][i11]['children'][i12]['children'] = []


                                                                                                    if (result[val12.id] !== undefined){

                                                                                                        result[val12.id].forEach((value,index) => {

                                                                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'][i11]['children'][i12]['children'].push(value)
                                                                                                        })  
                                                                                                    }                                                                 


                                                                                                    // level 14 children
                                                                                                    if(val12['children'] !== undefined) {

                                                                                                        val12['children'].forEach((val13, i13) => {

                                                                                                            dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'][i11]['children'][i12]['children'][i13]['children'] = []


                                                                                                            if (result[val13.id] !== undefined){

                                                                                                                result[val13.id].forEach((value,index) => {

                                                                                                                    dataObject['children'][i]['children'][i2]['children'][i3]['children'][i4]['children'][i5]['children'][i6]['children'][i7]['children'][i8]['children'][i9]['children'][i10]['children'][i11]['children'][i12]['children'][i13]['children'].push(value)
                                                                                                                })  
                                                                                                            }                                                                 





                                                                                                        })
                                                                                                    }



                                                                                                })
                                                                                            }



                                                                                        })
                                                                                    }
                                                                                })
                                                                            }

                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    } 
                                })
                            }                            
                        })
                    }                 
                })
            }            
        })

    }
    
    
    if (document.querySelectorAll(`${'#' + instance.data.divName + " .orgchart"}`).length == 0) {           

        (function($) {
            $(function() {
                var ds = dataObject;

                instance.data.oc = $(`${'#' + instance.data.divName}`).orgchart({
                    'data' : ds,
                    'nodeContent': 'title',
                    'pan': properties.enable_pan,
                    'zoom': properties.enable_zoom,
                    'direction': `${direction}`, //r2l, b2t, t2b, l2r
                    //'visibleLevel': 2,
                    'toggleSiblingsResp': false,
                    'zoominLimit': properties.zoom_in_limit,
                    'zoomoutLimit': properties.zoom_out_limit,
                    'exportButton': properties.show_export_button,
                    'exportFilename': `${properties.export_file_name}`,
                    'exportFileextension': `${properties.export_file_extension}`, //pdf
                    //'chartClass': `${instance.data.divName}`,
                    'draggable': false,
                    'parentNodeSymbol': ''

                });
                

            });           
        })(jQuery);

    }
    
    


    $(document).ready(function() {

        $(`${'#' + instance.data.divName}`).find('.node').on('click', function () {
            
                       
            instance.publishState('selected_id', $(this).data('nodeData').id)
            instance.publishState('selected_parent_id', $(this).data('nodeData').parentId)
				          
            setTimeout(() => { 
                instance.triggerEvent('node_is_clicked')
            }, 1)
        });
    })


    
    // Update data
        
    if (instance.data.oc !== undefined && instance.data.oc !== null && properties.enable_collapse == false){

        instance.data.oc.init({ 'data': dataObject })

    }
    
    
    
    if(properties.enable_collapse == false) {

        $(`${"#" + instance.data.divName + ' .orgchart'}`).addClass('noncollapsable'); // deactivate
    }else{
        $(`${"#" + instance.data.divName + ' .orgchart'}`).removeClass('noncollapsable'); // activate
    }
    
   

    //Styling the chart

    //Name
    $(`${'#' + instance.data.divName + " .orgchart .node .title"}`).css({

        'background-color': `${properties.name_bg_color}`,
        'overflow':'auto',
        'padding-right': '15px',
        'padding-left': '15px',
        'padding-top': `${properties.name_padding_top + 'px'}`,
        'padding-bottom': `${properties.name_padding_bottom + 'px'}`,
        'width': '100%',
        'text-align': 'center',
        'font-size': properties.name_font_size,
        'font-weight': 900,
        'height': `${properties.name_height + 'px'}`,
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
        'color': `${properties.name_font_color}`,
        'border-radius': `${properties.node_border_radius + 'px ' + properties.node_border_radius + 'px' + ' 0 0'}`      
    })

    //Content AKA title   
    $(`${'#' + instance.data.divName + " .orgchart .node .content"}`).css({

        'box-sizing': 'border-box',
        'padding-right': '15px',
        'padding-left': '15px',
        'padding-top': `${properties.title_padding_top + 'px'}`,
        'padding-bottom': `${properties.title_padding_bottom + 'px'}`,
        'height': '100%',
        'font-size': properties.title_font_size,
        'border':`${'3px solid ' + properties.title_border_color}`,
        'border-radius': `${'0 0 ' + properties.node_border_radius + 'px ' + properties.node_border_radius + 'px'}`,
        'text-align': 'center',
        'background-color': `${properties.title_bg_color}`,
        'color': `${properties.title_font_color}`,
        'text-overflow': 'ellipsis',
		'white-space': 'nowrap',
        
        'text-align':'center',
        'word-wrap': 'break-word',
        'word-break': 'normal',
        'white-space': 'normal',
        'display': 'block'
        
    })    


    //Arrows to collapse
    $('head').append(`${'<style>' + '#' + instance.data.divName +' .orgchart .node .edge::before{border-color:'+properties.arrow_color+' !important;}</style>'}`);


    //Lines to connect
    $(`${'#' + instance.data.divName + " .orgchart .lines .leftLine"}`).css({

        'border-left': `${'1px solid ' + properties.lines_color}`,   
    }) 
    $(`${'#' + instance.data.divName + " .orgchart .lines .rightLine"}`).css({

        'border-right': `${'1px solid ' + properties.lines_color}`,   
    }) 
    $(`${'#' + instance.data.divName + " .orgchart .lines .topLine"}`).css({

        'border-top': `${'2px solid ' + properties.lines_color}`,   
    }) 
    $(`${'#' + instance.data.divName + " .orgchart .lines .downLine"}`).css({

        'background-color': `${properties.lines_color}`,
        'height': '20px',
        'width': '2px'
    }) 
    
    
    
    //Default export button
    $(`${'#' + instance.data.divName + " .oc-export-btn"}`).css({

        'display': 'inline-block',
        'position': 'absolute',
        'right': '5px',
        'top': '5px',
        'padding': '6px 12px',
        'margin-bottom': '0',
        'font-size': '14px',
        'font-weight': '600',
        'text-align': 'center',
        'touch-action': 'manipulation',
        'cursor': 'pointer',
        'color': `${properties.export_button_font_color}`,
        'background-color': `${properties.export_button_bg_color}`,
        'border': '0px solid transparent',
        'border-color': '#4cae4c',
        'border-radius': `${properties.export_button_radius + 'px'}` 
    }) 

    
    //Background size       
    $('head').append(`${'<style>' + '#' + instance.data.divName +' .orgchart .node {width: '+properties.node_width+'px !important;}</style>'}`);

    //Background hover       
    $('head').append(`${'<style>' + '#' + instance.data.divName +' .orgchart .node:hover{background-color:'+properties.node_background_color+' !important; border-radius:'+properties.node_background_radius+'px !important;}</style>'}`);


    //Background focus   
    $('head').append(`${'<style>' + '#' + instance.data.divName +' .orgchart .node.focused{background-color:'+properties.node_background_color+' !important; border-radius:'+properties.node_background_radius+'px !important;}</style>'}`);


    //Center content and grid color
    $(`${'#' + instance.data.divName + " .orgchart"}`).css({

        'overflow':'auto',
        'width': '100%', 
        'background-image': 'linear-gradient(to right, '+properties.grid_color+' 10%, rgba(0, 0, 0, 0) 10.5%), linear-gradient('+properties.grid_color+' 10%, rgba(0, 0, 0, 0) 10%)'
    })  

    //Loading spinner color
    $('head').append(`${'<style>' + '#' + instance.data.divName +' .orgchart~.mask .spinner::before{border-top-color:'+properties.name_bg_color+' !important; border-left-color:'+properties.name_bg_color+' !important; border-bottom-color:'+properties.name_bg_color+' !important;}</style>'}`);
    

    function resetElementHeight() {
        var elements = document.querySelectorAll('.orgchart');  
        elements.forEach(element => {   

            if (element != null) {            
                var positionInfo = element.getBoundingClientRect();
                var height = positionInfo.height;
                instance.setHeight(height)  
            }
        })
    }

    if(true) {
        var timer =  setInterval(resetElementHeight, 10); 
    } else{
        if (timer !== undefined) {
            clearInterval(timer)
        }      
    }



}
