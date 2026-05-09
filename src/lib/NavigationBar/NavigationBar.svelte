<script>
    import { assets } from '$app/paths';

    /** 完全隐藏 Logo（由设置「隐藏顶部栏 Logo」控制） */
    export let hideLogo = false;
    /** 为 false 时在窄屏自动隐藏 Logo；为 true 时窄屏仍显示（除非 hideLogo） */
    export let showLogoOnNarrow = false;
</script>

<div
    class="nav"
    class:nav--narrow-hide-logo={!showLogoOnNarrow && !hideLogo}
>
    {#if !hideLogo}
        <img
            src={`${assets}/icon.svg`}
            alt=""
            class="logo-margin"
            width="40"
            height="40"
            decoding="async"
        />
    {/if}
    <slot />
</div>

<style>
    .nav {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        max-width: 100vw;
        height: 3.5rem;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: 2px;
        padding-right: 8px;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        z-index: 100;

        font-family: 'Noto Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
        font-size: 0.9375rem;
        font-weight: 500;
        letter-spacing: 0.02em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;

        background: linear-gradient(135deg, #4caf50, #2e7d32);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease, box-shadow 0.3s ease;
    }

    .logo-margin {
        margin: 0 12px;
        margin-left: 16px;
        flex-shrink: 0;
        transition: transform 0.3s ease;
    }

    .logo-margin:hover {
        transform: scale(1.05);
    }

    /* 窄屏为按钮腾位：默认隐藏 Logo（可由设置改为始终显示） */
    @media (max-width: 680px) {
        .nav--narrow-hide-logo .logo-margin {
            display: none;
        }
    }

    :global(.dark) .nav {
        background: linear-gradient(135deg, #2e7d32, #1b5e20);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
</style>
