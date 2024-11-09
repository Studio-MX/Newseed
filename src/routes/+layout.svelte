<link rel="stylesheet" href="../css/layout/default.css">
<div class="Liberty">
    <div id="top"></div>
    <link rel="shortcut icon" href="../img/layout/favicon.ico">
    <div class="nav-wrapper">
        <a class="navbar-brand" href="/">뉴시드위키</a>
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/RecentChanges"><span class="fa fa-refresh"></span><span class="hide-title">최근 변경</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/RecentDiscuss"><span class="fa fa-comments"></span><span class="hide-title">최근 토론</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/random"><span class="fa fa-random"></span><span class="hide-title">임의 문서</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-fix" href="#" data-toggle="dropdown" aria-expanded="false">
                        <span class="fa fa-gear"></span><span class="hide-title">도구</span>
                    </a>
                    <div class="dropdown-menu" role="menu">
                        <a href="/NeededPages" class="dropdown-item">작성이 필요한 문서</a>
                        <a href="/OrphanedPages" class="dropdown-item">고립된 문서</a>
                        <a href="/UncategorizedPages" class="dropdown-item">분류가 되지 않은 문서</a>
                        <a href="/OldPages" class="dropdown-item">편집된 지 오래된 문서</a>
                        <a href="/ShortestPages" class="dropdown-item">내용이 짧은 문서</a>
                        <a href="/LongestPages" class="dropdown-item">내용이 긴 문서</a>
                        <a href="/BlockHistory" class="dropdown-item">차단 내역</a>
                        <a href="/RandomPage" class="dropdown-item">RandomPage</a>
                        <a href="/Upload" class="dropdown-item">파일 올리기</a>
                        <a href="/License" class="dropdown-item">라이선스</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

<slot>
</slot>
