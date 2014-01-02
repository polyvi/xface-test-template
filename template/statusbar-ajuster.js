/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

function requireAjustmentForStatusBar(){
    return (isIOS() && parseFloat(window.device.version) >= 7.0 && StatusBar.isVisible) ? true : false;
}

function ajustStatusBarForManualTests(){
    document.body.style.borderTop = "0px";
    document.body.style.marginTop = "20px";
    var leftBtn = document.getElementById('hLeftBtn');
    leftBtn.style.marginTop = "20px";
    var rightBtn = document.getElementById('hRightBtn');
    rightBtn.style.marginTop = "20px";

    StatusBar.styleLightContent();
}

function ajustStatusBarForAutoTests(){
    document.body.style.marginTop = "20px";
    StatusBar.styleDefault();
}

function ajustStatusBar(){
    if (!requireAjustmentForStatusBar()){
        return;
    }
    if (typeof jasmine == 'undefined') {
        ajustStatusBarForManualTests();
    }else{
        ajustStatusBarForAutoTests();
    }
}

document.addEventListener('deviceready', ajustStatusBar, false);
